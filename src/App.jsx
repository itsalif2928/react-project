import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDolist  from './ToDolist.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ToDolist />
      
    </>
  )
}

export default App
