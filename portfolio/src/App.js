import './App.css';
import './fonts.css';
import Sidebar from './Sidebar';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
       <link href="./output.css" rel="stylesheet"></link>
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;