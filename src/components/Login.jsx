import { useState } from "react"
import { useNavigate } from "react-router-dom" // Använd useNavigate istället för useHistory
import { useMovieContext } from "./MovieContext"
import CryptoJS from "crypto-js"

const Login = () => {
  const { setUserName } = useMovieContext()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate() // Använd useNavigate

  const handleSubmit = (e) => {
    e.preventDefault()
    const hashedPassword = CryptoJS.SHA256(password).toString()
    localStorage.setItem(
      "user",
      JSON.stringify({ name, password: hashedPassword })
    )
    setUserName(name)
    navigate("/liked-movies")
  }

  return (
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
      <button type="submit">Log in</button>
    </form>
  )
}

export default Login
