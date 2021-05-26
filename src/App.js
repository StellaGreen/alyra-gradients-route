
import React from "react";
import { Switch,Route} from "react-router-dom";



import Home from "./pages/Home"
import FullScreen from "./pages/FullScreen"

function App() {  
  return (
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/gradient/:id" component={FullScreen}/>
    
    </Switch>
  )
}

export default App
