import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AlbumForm from "./components/AlbumForm";
import AlbumContainer from "./containers/AlbumsContainer";
import AlbumDetails from './components/AlbumDetails';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="Music" storename="Add great music to this playlist"/>
        <Switch>
          <Route path="/albums/new">
            <AlbumForm />
          </Route>

        <Route path="/albums/:id">
          <AlbumDetails />
          </Route>
        <Route path="/albums">
          <AlbumContainer />
        </Route>
       
        <Route path="/">
          <Home />
        </Route>

        
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
