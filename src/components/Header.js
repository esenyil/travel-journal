import './Header.css';
import logo from '../assets/logo.png';
function Header() {
    return(
        <div className="header-container">
            <div className="header">
                <img className="logo" src={logo} alt="logo" />
                <h2>my travel journal.</h2>
            </div>
        </div>
    )

}

export default Header;