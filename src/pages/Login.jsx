import React from 'react'
import {useLocation} from "react-router-dom"
import {loginUser} from "../api"

const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({email: "", password:""})
    const [error, setError] = React.useState(null)
    const [submitting, setSubmitting] = React.useState(false)
    
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(loginFormData)
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    const location = useLocation() || {} //actually you do not need the empty object since you use location? on row 33
    //if you console.log and there is no location.state it will throw error that it is null (hence you would need to nest console.log conditionally)
    //console.log(location) //works fine
    //note! in order to display location, you must be on this login Route and if you want state to be displayed, you must have first been to Authorized.jsx route to render the state that is then kept in Router memory

    const handleSubmit = (e) => {
        setSubmitting(true)
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        setLoginFormData(data)

        const loadLogin = async() =>{
            try{
               setSubmitting(true)
               const authData = await loginUser(loginFormData) //If an error is thrown, the execution immediately jumps to the catch (error) block 
               console.log(authData)
               setError(null) //just to be sure
            }catch (error){
                setError(error)
                console.log(error)
            } finally{
                setSubmitting(false)
            }
        }
        loadLogin()
    }   
    
    
  return (
    <div className="login-container">
        <h1>Sign in to your account</h1>
        {error?.message //if there is an error and it has a message property 
        ? <h3 className="login-first" aria-live="assertive">{error.message}</h3> //coming from server.js "No user with credentials found"
        : location.state?.message && <h3 className="login-first">{location.state.message}</h3> //coming from Authorized state "You must log in first"
}
        {/* <form onSubmit={handleSubmit} className="login-form">*/}
        <form method="post" onSubmit={handleSubmit} className="login-form">
            <input
                name="email" 
                // onChange={handleChange} 
                type="email"
                // value={loginFormData.email}
                placeholder="Email address"          
            />
            <input
                name="password"
                type="password"
                // onChange={handleChange}
                // value={loginFormData.password}
                placeholder="Password"
            />
            <button disabled={status === "submitting"}>{status = "submitting" ? "Logging in..." : "Log in"}</button>
        </form>
    </div>
  )
}

export default Login
