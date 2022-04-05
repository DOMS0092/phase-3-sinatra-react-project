import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AlbumCard from "./components/AlbumCard";
import AlbumForm from "./components/AlbumForm";
import AlbumContainer from "./containers/AlbumContainer";




function App() {
  return (
    <div className="App">
      <router>
        <Navbar />
        <Header slogan="Music" storename="Add great music to this playlist"/>
        <switch>
          <Route path="/album/new">
            <AlbumForm/>
          </Route>

        <Route path="/album/:id">
          <AlbumCard />
          </Route>
        <Route path="albums">
          <AlbumContainer />
        </Route>
        <Route path="/profile">
          <TrackProfile />
        </Route>
        <Route path="/">
          <Home />
        </Route>

        
        </switch>
      </router>
  
    </div>
  );
}

export default App;
