import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";

const App = () => (
  <div>
  <Jumbotron />
  <Container />
  </div>
);

export default App;
