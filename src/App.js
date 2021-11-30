import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LegalPage from "./components/LegalPage";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mentionslegales" component={LegalPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
