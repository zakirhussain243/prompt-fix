const exp = require('express');
const pdfParse = require("pdf-parse");
const multer = require("multer");
const express_async_handler = require('express-async-handler');
const Groq = require("groq-sdk");

const resume_app = exp.Router();
const upload = multer({ storage: multer.memoryStorage() });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

resume_app.post(
  "/extract",
  upload.single("resume"),
  express_async_handler(async (req, res) => {

    console.log("request reached backend");

    try {
      // 1️⃣ PDF buffer
      const fileBuffer = req.file.buffer;

      // 2️⃣ Extract text from PDF
      const data = await pdfParse(fileBuffer);
      const extracted_text = data.text;

      console.log("extracted length:", extracted_text.length);

      // 3️⃣ Job description (TEXT INPUT)
      const text = req.body.prompt;

      // 4️⃣ Combine EXACT variables
      const combinedPrompt = `
SYSTEM:
You are a resume editor AI assistant.

TASK:
Analyze the resume with respect to the given job description.

JOB DESCRIPTION:
${text}

CANDIDATE RESUME:
${extracted_text}

RULES:
- Match skills and experience to job requirements
- Identify gaps
- Suggest improvements
- Do not invent information
`;

      // 5️⃣ Send to Groq
      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "user", content: combinedPrompt }
        ],
        temperature: 0.2
      });

      // 6️⃣ Response
      res.status(201).send({
        message: "successful, resume analyzed",
        payload: response.choices[0].message.content
      });

    } catch (err) {
      console.log(err);
      res.status(500).send({ error: "failed to process resume" });
    }
  })
);

module.exports = resume_app;
