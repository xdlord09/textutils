import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/

//this is the site


//let name = "<b>Shashi1</b>";
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.'
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#076658';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils-Dark Mode';
      /* setInterval(()=>{
         document.title='TextUtils is Amazing ';
       },2000);
 
       setInterval(()=>{
         document.title='Install TextUtils Now ';
       },1500);*/
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils-Light Mode';
    }
  }
  // const[stext,setStext]=useState=('Enable Dark Mode');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  return (
    <>

      {/* <Navbar title="TextUtils" about="About TextUtils"/>*/}
      {/*<Router>*/}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* 
        /users--->component 1
        /users/home --->component 2
         */}
          {/*<Routes>
            <Route  exact path="/about" element={<About />}>

            </Route>

            <Route exact path="/" element={<TextForm heading="Enter the test to analyze below." mode={mode} showAlert={showAlert} />}>


            </Route>
          </Routes>*/}

          <TextForm heading="Enter the test to analyze below." mode={mode} showAlert={showAlert} />

        </div>
      {/*</Router>*/}

    
    </>
  );
}

export default App;





