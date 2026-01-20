const exp = require('express')
const pdfParse = require("pdf-parse");




const multer = require("multer")//multer is used for file extracting from the frontend 
const resume_app = exp.Router();

const express_async_hanlder = require('express-async-handler')
const upload = multer({storage:multer.memoryStorage()})//it stores the file in ram not in memory
resume_app.post("/extract",upload.single("resume"),express_async_hanlder(async(req,res)=>{
    console.log(typeof pdfParse);
    console.log("🔥 request reached backend");
    try{
    const fileBuffer = req.file.buffer;//to get the binary data of the file.
    const data = await pdfParse(fileBuffer);//to convert the binary data into text
    console.log("extracted length:", data.text.length);
    const extracted_text = data.text;//extracing the text from the data.
    console.log("file:", req.file);
    res.status(201).send({message:"successful, data is extracted",payload:extracted_text})
    }catch(err){
        console.log(err);
    }
}))
module.exports = resume_app;