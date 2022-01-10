import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <header>
                <img src="images/logo.svg" alt=""/>
                <i className="hamburger fas fa-bars"></i>
            </header>
        </div>
    );
};

export default Header;