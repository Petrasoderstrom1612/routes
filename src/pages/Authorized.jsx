import { Outlet, Navigate } from 'react-router-dom'

const Authorized = () => {
    const auth = false

    if (auth) {
       return(<Outlet/>) 
    } 

    return (<Navigate to="login" state={{message: "You must log in first"}}/>) //you do not need it in else because only one return works in a function //first curlies to get into JS second curlies for object
}                                //note! that the state is passed to the JSX component with login Route, only if you first navigate to this Authorized, if you are never on this JSX component (route host), then the state to be passed to login is never generated

export default Authorized
