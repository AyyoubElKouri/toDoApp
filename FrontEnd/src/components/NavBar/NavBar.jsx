import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/toDoIcon.png';

function NavBar() {
    return (
        <div className="navbar__container">
            <img className="navbar__logo" src={logo} alt="To Do App Logo" />
            <h2 className="navbar__title">Welcome to our To Do System</h2>
            <ul className="navbar__items">
                <li className="navbar__item-container">
                    <Link className="navbar__item" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar__item-container">
                    <Link className="navbar__item" to="/Welcome">
                        Welcome
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
