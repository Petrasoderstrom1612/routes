import React from 'react'

const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({email: "", password:""})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginFormData)
    }

    const handleChange = (e) => {
        const {name, value} =e.target
        setLoginFormData(prev => {
            return{
                ...prev, [name]: value
            }
        })
    }

  return (
    <div className="login-container">
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} classname="login-form">
            <input
                name="email" 
                onChange={handleChange} 
                type="email"
                value={loginFormData.email}
                placeholder="Email address"          
            />
            <input
                name="password"
                type="password"
                onChange={handleChange}
                value={loginFormData.password}
                placeholder="Password"
            />
            <button>Log in</button>
        </form>
    </div>
  )
}

export default Login
