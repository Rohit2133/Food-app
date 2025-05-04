import React, { useContext, useState } from 'react'
import './SignUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const SignUp = ({ setShowLogin }) => {

    const {url,setToken} = useContext(StoreContext);
    const [currState, setCurrentState] = useState("Login")
    const [data,setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault();
        let newUrl = url;
        if(currState === "Login"){
            newUrl += "/api/user/login";
        }
        else{
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-container">
                <div className="login-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-input">
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Enter Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing , I agree to the terms & policies. </p>
                </div>
                {currState === "Login" 
                ? <p>Create a new Account ?<span onClick={() => setCurrentState("Sign Up")}>  Click here</span></p>
                : <p>Already have an Account ?<span onClick={() => setCurrentState("Login")}>  Login here</span></p>}
            </form>
        </div>
    )
}

export default SignUp