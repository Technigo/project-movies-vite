import { useState } from "react"
import CryptoJS from "crypto-js"
import { useNavigate } from "react-router-dom"
import Navigation from "./Navigation"

function SignUp() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const hashedPassword = CryptoJS.SHA256(password).toString()
    localStorage.setItem(
      "user",
      JSON.stringify({ name, password: hashedPassword })
    )
    // Omdirigera användaren till inloggningssidan eller startsidan efter registrering
    navigate("/")
  }
  return (
    <>
    <Navigation />
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  )
}

export default SignUp
