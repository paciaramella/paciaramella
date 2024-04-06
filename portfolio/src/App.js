import choppa from './choppa.svg';
import './App.css';
import Sidebar from './Sidebar'; // Import your Sidebar component

function App() {
  return (
    <div className="App">
       <link href="./output.css" rel="stylesheet"></link>
      <Sidebar />
      <header className="App-header">
        <img src={choppa} className="pulse" alt="logo" />
        <p>
          Hi, I'm Parker.
        </p>
        <p>
          Let's learn a little bit.
        </p>
      </header>
    </div>
  );
}

export default App;
