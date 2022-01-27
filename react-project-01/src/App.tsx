import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Layouts from "./pages/Layouts";

import "./styles/index.less"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layouts />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="*" element={<Error404Page />} /> */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
