import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          {/* path ="/" means going to home! */}
          <Home />
        </Route>
      </Switch>
      {/* switch is going to find the Route!(url) */}
    </Router>
  );
}

export default App;
