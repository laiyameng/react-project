import {
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Layouts from "./pages/Layouts";

import "./styles/index.less"

function App() {
  return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layouts} />
      </Switch>
  );
}

export default App;
