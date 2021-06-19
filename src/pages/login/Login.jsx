import   './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                  <h3 className="loginLogo">TeddySocial</h3>
                  <span className="loginDesc">
                      Connect with friends and the world you on TeddySocial
                  </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Email" ></input>
                        <input className="loginInput" placeholder="Password" ></input>
                         <button className="loginButton">Log In</button>
                         <span className="loginForgot">Forgot Password?</span>
                         <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
