import "./Form.css";

const Form = () => {
    return(
        <div className="form">
            <input className="input-text" type="text" placeholder="Shorten a link here..."/> <br></br>
            <button className="input-button">Shorten It!</button>
        </div>
    )
}

export default Form;