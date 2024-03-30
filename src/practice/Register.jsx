import React from 'react'
import "./register.css"

const Register = () => {
    return (
        <div>
            <div className="login-container">
                <div className="register-main">
                    <div className="yellow"></div>
                    <div className="blue"></div>

                    

                    <div className="register-form">
                    <div className="register-header">
                        <div className="register-sign-up">
                            <h1>Sign-up</h1>
                        </div>
                    </div>
                    <div className="register-form-inputs">

                    <div className="register-input-user">
                            <input
                                type='text'
                                placeholder='Username'
                                className='register-inputbox-pass'
                            />
                        </div>

                        <div className="register-input-email">

                            <input
                                type='search'
                                placeholder='E-mail'
                                className='register-inputbox-email'
                            />
                            </div>

                        <div className="register-input-pass">
                            <input
                                type='password'
                                placeholder='Password'
                                className='register-inputbox-pass'
                            />
                        </div>

                        <div className="register-input-pass">
                            <input
                                type='password'
                                placeholder='Confirm password'
                                className='register-inputbox-pass'
                            />
                        </div>

                    </div>
                    <div className="register-btn">
                            <button>register</button>
                        </div>
                </div>

                
                
            </div>
        </div>
       </div>
    )
}

export default Register