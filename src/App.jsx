import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:\\,.<>?/`~";

  function handleSubmit(e) {
    e.preventDefault()
    if (name.trim() === "" || username.trim() === "" || password.trim() === "" || experience === "" || description === "") {
      alert("Compila tutti i campi!")
      return
    }
    if (specialization === "") {
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

  function isUsernameValid(username) {
    if (username.length < 6){
      return false
    }
   
    for (let i = 0; i < username.length; i++){
      if (symbols.includes(username[i])){
        return false
      }else if(username[i] === " "){
        return false
      } 
    }
    return true
  }

  function isPasswordValid(password) {
  let hasLetter = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (password.length < 8) return false;

  for (let i = 0; i < password.length; i++) {
    if (/[a-zA-Z]/.test(password[i])) hasLetter = true;
    else if (/[0-9]/.test(password[i])) hasNumber = true;
    else hasSymbol = true;
  }

  return hasLetter && hasNumber && hasSymbol;
}

  function isDescriptionValid(description) {
    if (description.length < 100 || description.length > 1000 ){
      return false
    }
   
    return true
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
          <strong style={{ color: !isUsernameValid(username) ? 'red' : 'green' }}>
            {!isUsernameValid(username) ? "Username non valido" : "Username valido"}
          </strong>
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <strong style={{ color: !isPasswordValid(password) ? 'red' : 'green' }}>
            {!isPasswordValid(password) ? "Password non valida" : "Password valida"}
          </strong>
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
        <strong style={{ color: !isDescriptionValid(description) ? 'red' : 'green' }}>
          {!isDescriptionValid(description) ? "Descrizione non valida" : "Descrizione valida"}
        </strong>

        <button type="submit">Invia</button>

      </form>
    </>
  )
}

export default App
