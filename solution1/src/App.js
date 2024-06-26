import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button type='button' onClick={()=>{
        throw Error("Oops, Something is Wrong!")
      }}> 
        Do not Click On this button
      </button>
    </div>
  );
}

export default App;
