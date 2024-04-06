import { useState } from "react"
import "./profileForm.css"
import CryptoJS from "crypto-js"
import { useMovieContext } from "./MovieContext"
import PropTypes from "prop-types"

export default function ProfileForm({ show, showDispatcher }) {
  const { setUserName } = useMovieContext()
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const password = formData.get("password")
    const username = formData.get("username")
    if (e.nativeEvent.submitter.name == "login") {
      const hashedPassword = CryptoJS.SHA256(password).toString()
      const userData = JSON.parse(localStorage.getItem(username))
      if (!userData) {
        setErrorMessage("Felaktigt användarnamn eller lösenord.")
      }
      if (userData.password === hashedPassword) {
        setUserName(username)
        showDispatcher(false)
      } else {
        setErrorMessage("Felaktigt användarnamn eller lösenord.")
      }
    } else if (e.nativeEvent.submitter.name == "signup") {
      const hashedPassword = CryptoJS.SHA256(password).toString()
      localStorage.setItem(
        username,
        JSON.stringify({ username: username, password: hashedPassword })
      )
      setUserName(username)
      showDispatcher(false)
    }
  }

  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            zIndex: 100,
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            animation: "blur-in 0.3s forwards",
          }}
          onClick={() => showDispatcher(false)}
        >
          <div
            style={{
              position: "fixed",
              zIndex: 101,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "solid 2px",
            }}
            className="profile-form"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="login-form">Login Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="both-buttons">
                <button type="submit" name="login">
                  Log in
                </button>

                <button type="submit" name="signup">
                  Sign up
                </button>
              </div>
              <div className="input-fild">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  )
}

ProfileForm.propTypes = {
  show: PropTypes.bool,
  showDispatcher: PropTypes.any,
}
