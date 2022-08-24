import logo from './logo.svg';
import './App.css';
import Upload from './Components/Upload'
import Navbar from './Navbar';
import Thumbnails from './Components/Thumbnails';
import Player from './Components/Player'
import {
  BrowserRouter,
 Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter> 
    <Navbar/>
   <div className='container'>
     <Switch> 
     <Route exact path="/">
        <Upload/>
        </Route>
        <Route exact path="/allthumbnail">
        <Thumbnails/>
        </Route>
        <Route exact path="/player">
        <Player/>
        </Route>
      </Switch> 
      </div>
      </BrowserRouter> 
  </div>
  );
}

export default App;
