import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Downloader from "./components/Downloader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Downloader />
      </div>
    );
  }
}

export default App;
