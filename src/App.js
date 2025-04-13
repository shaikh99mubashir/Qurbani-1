import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";
import Track from "./pages/track";
import "./App.css";

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
