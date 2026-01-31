import React, { useState } from "react";
import axios from "axios";
import "./Resume.css";

function Resume() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [file, setFile] = useState(null);

  const handleupload = async () => {
    if (!file) {
      alert("Please upload a resume (PDF)");
      return;
    }

    const formData = new FormData();
    formData.append("prompt", text);
    formData.append("resume", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/resume/extract",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setData(response.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="resume-page">
      <div className="resume-card">
        <h2>📄 Resume Analyzer</h2>
        <p>Upload your resume and paste the job description</p>

        <label>Job Description</label>
        <textarea
          placeholder="Paste the job description here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>Upload Resume (PDF)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleupload}>Analyze Resume</button>

        {data && (
          <div className="result-box">
            <h3>AI Response</h3>
            <pre>{data}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
