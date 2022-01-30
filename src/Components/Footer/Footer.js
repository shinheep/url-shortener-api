import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <h1>Shortly</h1>

            <div className="features section">
                <h3>Features</h3>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>

            <div className="resources section">
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>

            <div className="company section">
                <h3>Company</h3>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>

            <div className="icons">
                <img className="socialIcons" src="images/icon-facebook.svg" alt='facebook'/>
                <img className="socialIcons" src="images/icon-twitter.svg" alt='twitter'/>
                <img className="socialIcons" src="images/icon-pinterest.svg" alt='pinterest'/>
                <img className="socialIcons" src="images/icon-instagram.svg" alt='instagram'/>
            </div>
        </div>
    );
};

export default Footer;