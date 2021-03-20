import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Nav"
import './App.css';
import userProfile from './pages/userProfile';


function App() {
  return (
    <Router>
        <div>
          
            <Switch>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/pages/userProfile" component={userProfile} />

            </Switch>
          
        </div>
      </Router>
  );
}

export default App;
