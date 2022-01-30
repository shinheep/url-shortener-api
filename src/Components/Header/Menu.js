import "./Menu.css"

const Menu = () => {
    return(
        <div className="menu">
            <div className="first">
                <ul>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Resources</a>
                    </li>
                </ul>
            </div>

            <div className="second">
                <ul>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;