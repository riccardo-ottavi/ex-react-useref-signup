import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if(name.trim() === "" || username.trim() === "" || password.trim() === "" || experience === "" || experience === ""){
      alert("Compila tutti i campi!")
      return
    }
    if(specialization === ""){
      alert("scegli una specializzazione!")
      return
    }
    console.log(name)
    console.log(username)
    console.log(password)
    console.log(specialization)
    console.log(experience)
    console.log(description)
  }




  function handleChange(e) {
    const value = e.target.value;

    switch (e.target.name) {
      case "name":
        setName(value);
        break;

      case "username":
        setUserName(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "specialization":
        setSpecialization(value);
        break;

      case "experience":
        setExperience(value);
        break;

      case "description":
        setDescription(value);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <h1>Form di registrazione</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Nome completo</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Specializzazione</label>
          <select
            name="specialization"
            value={specialization}
            onChange={handleChange}
          >
            <option value="">Seleziona</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>

        <div>
          <label>Anni di esperienza</label>
          <input
            type="number"
            name="experience"
            value={experience}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div>
          <label>Breve descrizione sullo sviluppatore</label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Invia</button>

      </form>
    </>
  )
}

export default App
