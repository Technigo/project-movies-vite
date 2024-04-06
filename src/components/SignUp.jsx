import { useState } from "react"
import CryptoJS from "crypto-js"
import { useNavigate } from "react-router-dom"
import Navigation from "./Navigation"
// import "./signup.css"

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

    navigate("/")
  }
  return (
    <>
      <Navigation />
      <div className="register">
        <h2 className="title-reg">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default SignUp
