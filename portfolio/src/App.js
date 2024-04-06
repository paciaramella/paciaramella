import choppa from './choppa.svg';
import './App.css';
import './fonts.css';
import Sidebar from './Sidebar'; // Import your Sidebar component

function App() {
  return (
    <div className="App">
       <link href="./output.css" rel="stylesheet"></link>
      <Sidebar />
      <body className="App-header">
      {/* <img src={choppa} className="pulse" alt="logo" /> */}
        <p>
          Let's Adventure!
        </p>
      </body>
    </div>
  );
}

export default App;
