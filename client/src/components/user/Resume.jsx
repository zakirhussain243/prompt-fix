import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Resume() {
    const [text,setText]=useState("");
        const [file,setFile]=useState(null);
    const handleupload=async ()=>{
        if(!file){
            console.log("please upload a file")
            return;
        }
        const formData = new FormData()
        formData.append("resume",file);
        try{
            const response = await axios.post(
                "http://localhost:3000/resume/extract",
                formData,
                {headers:{"Content-Type":"multipart/form-data"}}
            );
            setText(response.data.payload)
        }catch(err){
            console.log(err);
        }

    }
      return (
    <div>
        <input type="file"
        accept='.pdf'
        onChange={(e)=>setFile(e.target.files[0])}></input>
        <button onClick={handleupload} >upload</button>
        <pre style={{ whiteSpace: "pre-wrap" }}>{text}</pre>
    </div>
  )
}

export default Resume