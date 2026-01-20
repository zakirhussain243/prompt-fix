import React from 'react'
import Login from './components/user/Login.jsx'
import Users from './components/user/Users.jsx'
import Resume from './components/user/Resume.jsx'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Link to="/users">
     <button>Show all emails</button>
     </Link >
     <Link to="/resume">
     <button>upload you resume</button>
     </Link>
     <Routes>
      <Route path='/' element={<Login/>}> </Route>
       <Route path='/users' element={<Users/>}> </Route>
      <Route path='/resume'element={<Resume/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App