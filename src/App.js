import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginForm from "./Components/ReactRouterUsingApiFetchingAuthentication/LoginForm/indexHook";
import Home from "./Components/ReactRouterUsingApiFetchingAuthentication/Home";
import NotFound from "./Components/ReactRouterUsingApiFetchingAuthentication/NotFound";

import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
