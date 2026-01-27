import React, { useState } from 'react'
import axios from 'axios'

function Resume() {
    const [text,setText]=useState("");   // job description
    const [data,setData]=useState("");   // AI response
    const [file,setFile]=useState(null);

    const handleupload = async () => {
        if(!file){
            console.log("please upload a file");
            return;
        }

        const formData = new FormData();
        formData.append("prompt", text);
        formData.append("resume", file);

        try{
            const response = await axios.post(
                "http://localhost:3000/resume/extract",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            setData(response.data.payload); // ✅ AI response
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <textarea
                placeholder='enter the job description'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />

            <input
                type="file"
                accept='.pdf'
                onChange={(e)=>setFile(e.target.files[0])}
            />

            <button onClick={handleupload}>upload</button>

            <pre style={{ whiteSpace: "pre-wrap" }}>
                {data}
            </pre>
        </div>
    )
}

export default Resume;
