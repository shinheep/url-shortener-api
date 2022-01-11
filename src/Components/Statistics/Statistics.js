import './Statistics.css'

const Statistics = () => {
    return (
        <div className="statistics">
            
            <h2 className="statistics-title">Advanced Statistics</h2>
            <p className="statistics-text">Track how your links are performing across the web with our advanced statistics dashboard.</p>

            <div className="services-container">
                
                <div className="service">
                    <img className="service-icons" src="images/icon-brand-recognition.svg" alt=""/> <br></br>

                    <div className="service-text">
                        <h3>Brand Recognition</h3>

                        <div className="brand-recognition">
                            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                        </div>
                    </div>
                </div>

                <div className="service">
                    <img className="service-icons" src="images/icon-detailed-records.svg" alt=""/> <br></br>

                    <div className="service-text">
                        <h3>Detailed Records</h3>

                        <div className="detailed-records">
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </div>
                    </div>
                </div>

                <div className="service">
                    <img className="service-icons" src="images/icon-fully-customizable.svg" alt=""/> <br></br>

                    <div className="service-text">
                        <h3>Fully Customizable</h3>

                        <div className="fully-customizable">
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;