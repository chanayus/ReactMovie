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
        <Route exact path="/ReactMovie/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;