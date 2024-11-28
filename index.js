import express from "express";
import appConfig from "./config/appConfig.js";
import router from "./router/router.js";

const app = express();
const {PORT} =appConfig;
app.use(express.json());

app.use("/",router)

app.listen(PORT,()=>{
        console.info(`server is running on port ${3000}`)
})