import logo from './logo.svg';
import './App.css';
import './CustomButton.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="I" color="Red" />
          <CustomButton text="know" color="Green" />
          <CustomButton text="React!" color="Blue" />
        </div>
      </header>
    </div>
  );
}

export default App;
