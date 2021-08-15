import React,  {useState}from 'react'
import SignUpScreen from "./SignUpScreen"
import "./loginScreen.css"
function Login() {
const [signin, setsignin] = useState("")
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img 
                className="loginScreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""
/>

 <button onClick={()=>setsignin(true)}
  className="loginScreen_btn">sign in</button>0

       <div className="loginScreen_grad"/>
       
       </div>
       
       <div className="loginScreen_body">
        {signin ? (
            <SignUpScreen/>
        ):
        (
            <>
<h1>Unlimited films,Tv Programs and
             More... </h1>
             <h2>Watch anywhere.Cancel at any time</h2>
             <h3>
                 Ready to Watch? Enter your  Email to
                 Create or restart your membership 
             </h3>
             <div className="Login_input">
                 <form>
                     <input  type="emial" placeholder="Email Adress"/>
                     <button onClick={()=>setsignin(true)}
                     className="LoginStarted_btn"> 
                           Get Started
                     </button>
            

                 </form>
             </div>
         </>
        )}
          
       </div>
            
        </div>
    )
}

export default Login;
