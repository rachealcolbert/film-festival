import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav"
import './App.css';


function App() {
  return (
    <Router>
        <div>
          
            <Switch>
              <Nav />
              <Route exact path="/" component={Home} />

            </Switch>
          
        </div>
      </Router>
  );
}

export default App;
