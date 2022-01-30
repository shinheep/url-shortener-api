import "./Menu.css"

const Menu = () => {
    return(
        <div className="menu">
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
    );
};

export default Menu;