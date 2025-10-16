import { NavLink} from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const HeaderLinks = () => {
  return (
    <header>
      <NavLink to="/" className={({isActive}) => isActive ? "activenav site-logo" : "site-logo"}>#VanLife</NavLink>
      <nav>
        <NavLink to="host" className={({isActive}) => isActive ? "activenav" : null}>Host</NavLink>
        <NavLink to="about" className={({isActive}) => isActive ? "activenav" : null}>About</NavLink>
        <NavLink to="vans" className={({isActive}) => isActive ? "activenav" : null}>Vans</NavLink>
        <NavLink to="login" className={({isActive}) => isActive ? "activenav" : null}><RxAvatar /></NavLink>
      </nav>
    </header>
  );
};

export default HeaderLinks;

