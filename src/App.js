import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import UserTable from './components/UserTable';


function App() {
  const [formData, setformData] = useState([]);
  console.log("formData ",formData);

  let getDataFromForm = (userData) =>{
    // console.log("data in app", data);
    let formDataCopy = [...formData];
    formDataCopy.push(userData);
    setformData(formDataCopy)
  }
  return (
    <div className="App">
      {/* <h1>Hello React</h1> */}

      <UserForm getDataFromForm={getDataFromForm}/>
      <UserTable formData = {formData} />








      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
