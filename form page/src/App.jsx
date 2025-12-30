import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element= {<Home />} />
      <Route path = "/form" element= {<Form />} />
    </Routes>
      
    </>
  )
}

export default App
