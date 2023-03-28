import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function handleCustomClick(text) {
  alert(text);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="Hello, World!" color="green" onCustomClick={handleCustomClick} />
          <CustomButton text="Bye, World!" color="blue" onCustomClick={handleCustomClick} />
          <CustomButton text="Wassup, World!" color="red" onCustomClick={handleCustomClick} />
        </div>
      </header>
    </div>
  );
}

export default App;
