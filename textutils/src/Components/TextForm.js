import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
    }

    const handleCapitalize = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
    }

    const handlechangeColor = () => {
        setTextColor('Blue');
    }

    const handleSpeakText = () => {
        let message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Your Text Here');
    const [textColor, setTextColor] = useState('black');
  return (
    <div>
        <div className = "container">
            <div className="mb-3">
                <h2 className = "my-3">{props.heading}</h2>
                <textarea className="form-control" id="myBox" rows="8" 
                value = {text} 
                onChange = {handleOnChange} 
                style = {{color: textColor}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleCapitalize}>Capitalize</button>
            <button className="btn btn-primary mx-1" onClick = {handlechangeColor}>Change Color</button>
            <button className="btn btn-primary mx-1" onClick = {handleSpeakText}>Speak</button>
        </div>

        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

// TextForm.propTypes = {
//     heading : propTypes.string.isRequired
// }
