//useState is a hook --- imported from react  
//HOOK ----- {useState} ----- 
//container is a class of bootstrap
//directly the text will not set :: react uses function ----- setText() is the function here

//text = text2 ---->wrong way to change text.
// setText = ("Sanway is Intelligent") --- enter the text ki jgh value is updated as Sanway is Intelligent.




import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked " + text);
        //setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!' , 'success');
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)//sets the value of text as the text updated value + h(extras)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!' , 'success');

    }
    const handleClearText = () => {
        let newText = " ";
        setText(newText);
        props.showAlert('Text cleared!' ,'success');


    }
    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3 form-check">
                    <textarea value={text} onChange={handleOnChange} className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}  >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText} >Clear Text</button>
            </div>
            <div className="container my=3" >
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text summary</h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(" ").length} words and {text.length} characters</p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(" ").length} Minutes taken to read.</p>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Enter something in the textbox above to preview it."}</p>
            </div>
        </>
    )
}
