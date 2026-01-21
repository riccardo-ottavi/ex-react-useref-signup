import { useState, useRef } from 'react'
import './App.css'

function App() {

  const nameRef = useRef();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const specializationRef = useRef();
  const expRef = useRef()
  const [description, setDescription] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:\\,.<>?/`~";

  function handleSubmit(e) {
    e.preventDefault()
    const nameInput = nameRef.current;
    const name = nameInput.value

    const specializationInput = specializationRef.current;
    const specialization = specializationInput.value

    const expInput = expRef.current;
    const experience = expInput.value

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


      case "username":
        setUserName(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "description":
        setDescription(value);
        break;

      default:
        break;
    }
  }

  function isUsernameValid(username) {
    if (username.length < 6) {
      return false
    }

    for (let i = 0; i < username.length; i++) {
      if (symbols.includes(username[i])) {
        return false
      } else if (username[i] === " ") {
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
    if (description.length < 100 || description.length > 1000) {
      return false
    }

    return true
  }

  return (
    <>
      <h1>Form di registrazione</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>
            Nome completo
            <input
              type="text"
              name="name"
              ref={nameRef}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <strong style={{ color: !isUsernameValid(username) ? 'red' : 'green' }}>
              {!isUsernameValid(username) ? "Username non valido" : "Username valido"}
            </strong>
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <strong style={{ color: !isPasswordValid(password) ? 'red' : 'green' }}>
              {!isPasswordValid(password) ? "Password non valida" : "Password valida"}
            </strong>
          </label>
        </div>

        <div>
          <label>
            Specializzazione
            <select
              name="specialization"
              ref={specializationRef}
              onChange={handleChange}
            >
              <option value="">Seleziona</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Anni di esperienza

            <input
              type="number"
              name="experience"
              ref={expRef}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>

        <div>
          <label>
            Breve descrizione sullo sviluppatore
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
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
