import { Outlet, Navigate } from 'react-router-dom'

const Authorized = () => {
    const auth = false

    if (auth) {
       return(<Outlet/>) 
    } 

    return (<Navigate to="login" state={{message: "You must log in first"}}/>) //you do not need it in else because only one return works in a function //first curlies to get into JS second curlies for object
}

export default Authorized
