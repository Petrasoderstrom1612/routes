import React from 'react'

const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({email: "", password:""})
        
        const handleSubmit = (e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const data = Object.fromEntries(formData)
            setLoginFormData(data)
            console.log(data)
        }
    
  return (
    <div className="login-container">
        <h1>Sign in to your account</h1>
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
            <button>Log in</button>
        </form>
    </div>
  )
}

export default Login
