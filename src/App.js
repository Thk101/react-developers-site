import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { View, Text } from "react-native-web";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React developers Canada</h1>
        <h3>This site is under development. </h3>
        <Button style={{ color: "#FFF" }} variant="contained">
          <a href={"mailto:tariqule@gmail.com"}>Contact developer</a>
        </Button>
      </header>
    </div>
  );
}

export default App;
