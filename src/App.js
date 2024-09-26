import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FullScreen from "./pages/FullScreen";
import Proposition from "./pages/Proposition";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gradient/:id" component={FullScreen} />
        <Route exact path="/proposition" component={Proposition} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
