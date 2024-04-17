import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";
import Track from "./pages/track";
import "./App.css";

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">
                  <Routes>
                      <Route
                          exact
                          path="/"
                          element={<Home />}
                      ></Route>
                      <Route
                          exact
                          path="/book"
                          element={<Book />}
                      ></Route>
                      <Route
                          exact
                          path="/track"
                          element={<Track />}
                      ></Route>
                  </Routes>
              </div>
          </Router>
      );
  }
}

export default App;