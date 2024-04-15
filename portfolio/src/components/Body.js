import '../App.css';
import '../fonts.css'
import Bio from './Bio';
import TabMenu from './TabMenu';
function Body() {
    return (
      <body>
        <div className="App-body">
          <Bio />
          <TabMenu />
          <div>
          </div>
        </div>
      </body>
    );
}

export default Body;