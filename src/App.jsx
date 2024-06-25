import { useState } from 'react'
import './App.css'
import Estructura from './Components/Estructura'
//import postData from './js/fetch'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
    <h1>To Do List</h1>
    <Estructura></Estructura>
    </>
  )
}

export default App

