import { Router } from "express";
import { enquiryController } from "../controller/controller.js";

const router = Router();

router.route("/enquiry").post(enquiryController)

// router.post('/enquiry', (req,res)=>{
//            try{
//                 res.sendStatus(200)
//                 console.log('success')
//            }catch(err){
//                 res.sendStatus(500)
//                 console.log('failed')
//            }
// })
export default router;