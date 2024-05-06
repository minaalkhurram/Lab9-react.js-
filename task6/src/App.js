import logo from './logo.svg';
import './App.css';
import ScrollTop from './ScrollTop.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
    Scroll down 
        </p>
       
     
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        End 
        </p>
       
     
      </header>
      <ScrollTop/>
    </div>
  );
}

export default App;
