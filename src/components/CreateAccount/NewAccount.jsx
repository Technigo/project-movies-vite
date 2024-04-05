import "../CreateAccount/newAccount.css";

export const NewAccount = () => {
  return (
    <div className="new-account-container">
        
        <form className="new-account-input-container">
            <h1>Create your account here</h1>
            <label className="questions name">Choose a login name: 
                <input
                    type="text"
                    placeholder="Login name here..."
                    // value=""
                    // onChange={userName}
                />
            </label>
            <label className="questions password">Choose a password:  
                <input
                    type="password"
                    placeholder="Password here..."
                    // value=""
                    // onChange={password}
                />
            </label>
            <label className="questions email">Type your email:  
                <input
                    type="email"
                    placeholder="Email here..."
                        // value=""
                        // onChange={email}
                />
            </label>

            <button className="submit">Create Account</button>
        </form>
    </div>
  )
}
