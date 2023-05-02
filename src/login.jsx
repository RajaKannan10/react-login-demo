//This is Login Page
import React from "react";
import LoginImage from "./Logo.png";

import Dashboard from "./dashboard";


const Login = () => {
  
  
    
    return (
        <div className="form-container">
             
             {/* Login Form */}
             <form className="form-color" >
        <h1 className="text-design">Login Form</h1>

        {/* Login Logo */}
     <div>
        <img src={LoginImage} alt="LoginImage" className="picture"></img>
        </div> 

      {/*(Another way of rendering image) <div>
        <img src={require("./LoginImage.jpg")} alt="LoginImage"></img>
</div> */}

    
    {/* This is for Email field */}
            <label for="email">Email</label>
            <div className="field-design">
    <input type="email" placeholder="Enter your valid email" id="email" name="email" />
    </div>

    
    {/* This is for Password field */}
    <label for="password">Password</label>
    <div className="field-design">
    <input type="password" placeholder="Enter your Password" id="password" name="password" />
    </div>

    {/* This is for login button */}
    <div >
    
        <button className='login-button'><a href="/dashboard">Login</a></button>
        
    </div>

    {/* This is for new user 
   <div >
    <a href ="#">New User? Register Now</a>
    </div>
    */}

    </form>
    
      </div>
    )
} 

export default Login