import './App.css';
import './fonts.css';
import Sidebar from './Sidebar'; // Import your Sidebar component
import { Grid, Card, CardContent } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import { ALBUMS } from './data-access/album-covers';
// import Album from './components/Album';
import EducationCard from './components/EducationCard';

function App() {
  return (
    <div className="App">
       <link href="./output.css" rel="stylesheet"></link>
      <Sidebar />
      <body className="App-header">
        {/* Bio Grid*/}
        <Grid container spacing={5}>
          <Grid item xs={2}>
            {/* envisioning cards with personal info here */ }
            <EducationCard />
          </Grid>
          <Grid item xs={5}>
          </Grid>
          <Grid item xs={4}>
            <div className='App-thick-div'>
              <p>Hi, I'm Parker.</p>
              <p style={{marginTop: '8px'}}>==================================</p>
              <p style={{marginTop: '8px'}}>I am a software engineer by trade and an enthusiastic student of life outside of work.</p>
              <p style={{marginTop: '8px'}}>==================================</p>
              <p style={{marginTop: '8px'}}>The purpose of this website is to express what I learn in this life and demonstrate my passions and skills for all to see.</p>
              <p style={{marginTop: '8px'}}>==================================</p>
              <p style={{marginTop: '8px'}}>Make youself at home and take a look around.</p>
            </div>  
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;