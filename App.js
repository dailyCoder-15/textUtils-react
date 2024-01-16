import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
      }
    )
    setTimeout( () => {
      setAlert(null)
    }, 1600);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#011c44';
      showAlert("Dark Mode has been Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* <Routes>
          <Route exact path="/Home" element={<TextForm heading="Enter the text to analyze below: " Alert={showAlert} mode={mode}/>} />
          <Route exact path="/about" element={<About />}>
        </Route>
        </Routes> */}
        <TextForm heading="Enter the text to analyze below: " Alert={showAlert} mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
