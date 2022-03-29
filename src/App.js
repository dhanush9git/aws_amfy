import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import ReactDOM from 'react-dom';

function App() {
	
	const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from Kapstone 
        </p>


		
      </header>
	  	
    </div>
  );
}

export default App;
