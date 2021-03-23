import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/userProfile";
import "./index.css";
import Login from "./components/LoginForm"
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Carousel";


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Carousel />
          
        </Switch>
      </>
    </Router>
  );
}

export default App;
