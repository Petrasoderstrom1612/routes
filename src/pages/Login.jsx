import React from 'react'

const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({email: "", password:""})
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        setLoginFormData(data)
        console.log(data)
    }
    
  return (
    <div className="login-container">
        <h1>Sign in to your account</h1>
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
            <button>Log in</button>
        </form>
    </div>
  )
}

export default Login
