import React, { useState } from 'react'
import "./login.css"
import boy from "./boy.svg"
import Register from './Register'

const Login = () => {

    return (
        <div className="login-container">
            <div className="login-main">
                <div className="yellow"></div>
                <div className="blue"></div>
                <div className="login-img"><img src={boy} alt="" /></div>
                <div className="login-form">
                    <div className="form-header">
                        <div className="sign-in">
                            <h1>Sign-in</h1>
                        </div>
                    </div>
                    <div className="form-inputs">
                        <div className="input-email">

                            <input
                                type='search'
                                placeholder='E-mail'
                                className='inputbox-email'
                            />
                            </div>

                        <div className="input-pass">
                            <input
                                type='password'
                                placeholder='Password'
                                className='inputbox-pass'
                            />
                        </div>





                    </div>
                    <div className="login-btn"><button>sign in</button></div>
                </div>
                <div className="login-content">
                   <div className="login-content-header"><h1>Sign in to <br />SomaiyaSync</h1>
                    </div>
                    <div className="login-content-main"><p>if you don't have an account <br /> You can <a href="#" className='orange-content'> Register here</a></p></div>
                    </div> 
            </div>
        </div>
    )
}

export default Login;




