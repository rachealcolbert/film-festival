import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Navbar from "./components/Nav"
import './App.css';
import userProfile from './pages/userProfile';

=======
import Profile from "./pages/userProfile";
import "./index.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 639bd344fd7305ba5d1e2cbf1156e520cff81205

function App() {
  return (
    <Router>
<<<<<<< HEAD
        <div>
          
            <Switch>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/pages/userProfile" component={userProfile} />

            </Switch>
          
        </div>
      </Router>
=======
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </>
    </Router>
>>>>>>> 639bd344fd7305ba5d1e2cbf1156e520cff81205
  );
}

export default App;
