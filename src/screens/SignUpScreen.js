import React, { useRef } from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase';
function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    })

      ;
  }

  const signIn = (e) => {
    e.preventDefault();
  }
  return (
    <div className='SignUpScreen'>
      <form action="">
        <h1>Sing In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className="SignUpScreen__gray">New to Netflix?</span>
          <span className='SignUpScreen__link' onClick={register}> Sign Up now.</span>

        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen