import   './register.css'

export default function Register() {
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
                        <input className="loginInput" placeholder="Username" ></input>
                        <input className="loginInput" placeholder="Email" ></input>
                        <input className="loginInput" placeholder="Password" ></input>
                        <input className="loginInput" placeholder="Password Again" ></input>
                         <button className="loginButton">Sign Up</button>
                         <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
