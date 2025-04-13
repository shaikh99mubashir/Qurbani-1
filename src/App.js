import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import Book from "./pages/book";
import Home from "./pages/home";
import Track from "./pages/track";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/book" element={<Book />}></Route>
            <Route exact path="/track" element={<Track />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
