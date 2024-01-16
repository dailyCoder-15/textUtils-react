import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => {//upperCase btn fn
        // console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.Alert("converted to UpperCase!", "success");
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.Alert("converted to lowerCase!", "success");

    }

    const firstWordCapitalize = () => {
        let words = text.split(" ").map(element => {
            return element.charAt(0).toUpperCase() + element.slice(1);
          });
          let newText = words.join(" ");
          setText(newText);
          props.Alert("Capitalized first Words!", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On Change ");
        setText(event.target.value)
    }

    const clearBtn = () => {
        setText("");
        props.Alert("Text Cleared!", "success");
 
    }


    const [text, setText] = useState("");/* update fn */
    // text = "new text";//wrong way to change state
    // setText("new text");//correct way to change state
  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'#343434':'white', 
                                                     color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="7" value={text} 
                                                     placeholder='Enter text here'></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert into Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert into Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={firstWordCapitalize}>Capitalize starting words</button>
      <button className="btn btn-primary mx-1" onClick={clearBtn}>Clear words</button>

    </div>
    <div className="container my-4" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.005 * text.split(" ").length} </b>Minutes read</p>
        <h2>Preview</h2>
        <p>{text === ""?'Enter something in text box above to preview it here': text}</p>
    </div>
    </>
  )
}
