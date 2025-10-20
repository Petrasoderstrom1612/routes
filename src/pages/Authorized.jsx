import { Outlet, Navigate } from 'react-router-dom'

const Authorized = () => {
    const auth = false

    if (auth) {
       return(<Outlet/>) 
    } 

    return (<Navigate to="login"/>) //you do not need it in else because only one return works in a function
}

export default Authorized
