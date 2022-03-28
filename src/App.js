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

		<p>
		<h4>Simple demo using input and submit</h4>
			 <form onSubmit={handleSubmit}>
			  <label>Enter your name :&nbsp; 
				<input 
				  type="text" 
				  value={name}
				  onChange={(e) => setName(e.target.value)}
				/>
			  </label>
			  <input type="submit" />
			</form>
        </p>
		
      </header>
	  	
    </div>
  );
}

export default App;
