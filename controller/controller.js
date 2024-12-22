import { ZodError } from "zod";
import { enquirySchema } from "../helper/validator.js";
import { sheets } from "../services/googleSheetApi.js";
import appConfig from "../config/appConfig.js";

const {GOOGLE_SHEET_ID} = appConfig
export const enquiryController = (req,res)=>{ 
    
    
        try{
            //1 Body validation
            const body = enquirySchema.parse(req.body);
            const { name,emailAddress,category,message } = body;
            
            //2 google sheet entry
            sheets.spreadsheets.values
            .append({
                spreadsheetId: GOOGLE_SHEET_ID,
                range: 'Enquiry!A:E',
                insertDataOption: 'INSERT_ROWS',
                valueInputOption: 'RAW',
                requestBody: {
                    values: [[name, emailAddress, category, message]]
                }
            })
            .catch((err) => {
                console.error(err)
            })

            //3. Response send
            res.status(201).json({
                success : true,
                message : "Success"
            })
            
        } catch(err){
            if(err instanceof ZodError){
               return res.status(422).json({
                    success : false,
                    message : err.errors
                })
            }
         res.sendStatus(500)
        }
}