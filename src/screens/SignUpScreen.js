import React,{useRef} from 'react'
import "./SignupScreen.css"
import {auth} from "../firbase"
function SignUpScreen() {

const emailRef= useRef(null);
const passwordRef= useRef(null)
const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
    const signIn =(e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    return (
        <div className="SignupScreen">
            <form>
                <h1>
                    Sign in
                </h1>
                <input ref={emailRef} type="emial" placeholder="Email"  />
                <input  ref={passwordRef}  placeholder="password" type="password" />
                <button  onClick= {signIn}
                type="submit">Sign In </button>

                <h4>
                    <span className="span_gray">New to Netflix?</span>
                     <span  onClick={register}
                     className="span_link"> Sign Up now.</span>
                     
                     </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
