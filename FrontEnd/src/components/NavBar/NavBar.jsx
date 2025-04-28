import { Link } from "react-router";
import './NavBar.css'
import logo from '../../assets/toDoIcon.png';

function NavBar(){
    return (
        <div className="navbar-contaienr">
            <img class="navbar-logo" src={logo} alt="Error" />
            <h2 className="navbar-title">Welcome to our To Do System</h2>
            <ul className="navbar-items">
                <li className="navbar-item"><Link to='/'>Home</Link></li>
                <li className="navbar-item"><Link to='/Welcome'>Welcome</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;