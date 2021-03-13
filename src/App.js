import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./page/home"
import MovieDetail from "./page/movieDetail"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
}

export default App;