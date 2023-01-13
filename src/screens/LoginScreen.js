import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignUpScreen'
function LoginScreen() {
    const [singIn, setSignIn] = useState(false);


    return (
        <div className='loginScreen'>
            <div className="loginScreen__bg">
                <img className='loginScreen__logo'
                    src="https://tinyurl.com/2mlauzds"
                    alt="" />
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen__button'>
                    Sign In
                </button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {singIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programs and more.</h1>
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to crate or restart your membership</h3>
                        <div className="loginScreen__input">
                            <form action="#">
                                <input type="email" placeholder='Email Address' />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen__getStarted'>
                                    GET START
                                </button>
                            </form>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    )
}
export default LoginScreen;
