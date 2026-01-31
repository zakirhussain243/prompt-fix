import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
        <div className='home-card'>
        <h1>Welcome to PromptFix</h1>
        <p>
          Login to upload your resume, analyze it with job description.
        </p>
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
    </div>
    </div>
  )
}

export default Home