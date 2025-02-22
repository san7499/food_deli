import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {  
    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                {/* Title and Close Button */}
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)}  
                        src={assets.cross_icon} 
                        alt="Close" 
                    />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Sign Up" && <input type="text" placeholder="Your name" required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                <button type="submit">
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
                </div>

                {currState === "Login" ? (
                    <p>
                        Create a new account? 
                        <span onClick={() => setCurrState("Sign Up")} style={{ cursor: "pointer" }}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account? 
                        <span onClick={() => setCurrState("Login")} style={{ cursor: "pointer" }}>
                            Login here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
}

export default LoginPopup;
