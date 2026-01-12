import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = ("");
  const [experience, setExperience] = (null);
  const [description, setDescription] = ("")

  return (
    <>
      <h1>Prova</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <input type="select" />
        <input type="number" />
        <textarea name="" id=""></textarea>
      </form>
    </>
  )
}

export default App
