import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-section">
            <img className="working-pic" src="images/illustration-working.svg" alt=""/>

            <h1 className="hero-text">More than just shorter links</h1>
            <p className="hero-description">Build your brand's recognition and get detailed insights on how your links are performing.</p>

            <button className="get-started-button">Get Started</button>
        </div>
    )
}

export default Hero;