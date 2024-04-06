import './App.css';
import './fonts.css';
import Sidebar from './Sidebar'; // Import your Sidebar component
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
       <link href="./output.css" rel="stylesheet"></link>
      <Sidebar />
      <body className="App-header">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <p>
             Let's Adventure!
            </p>
          </Grid>
          <Grid item xs={4}>
            <div className='App-thick-div'>
              This is real. This is me. This is exactly where I'm supposed to be.
            </div>  
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
