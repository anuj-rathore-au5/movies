import React from 'react';
import './App.css';
import LoadButton from "./components/loadbuttons";
import MoviesBox from './components/moviesbox';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TvBox from "./components/tvserialbox";
import MovieDetail from "./components/moviedetail";
import TvDetail from "./components/tvdetails";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-extended">
          <h4 className="nav-item text-light">Moviemenia</h4>
        </nav>
        <LoadButton></LoadButton>
        <Route path="(/movies|/)" exact>
          <div className="mt-5 p-5">
            <MoviesBox></MoviesBox>
          </div>
        </Route>
        <Route path={"/tvserials"} exact>
          <div className="mt-5 p-5">
            <TvBox></TvBox>
          </div>
        </Route>
        <Route path={"/movies/:id"} component={MovieDetail}></Route>
        <Route path={"/tvserials/:id"} component={TvDetail}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;