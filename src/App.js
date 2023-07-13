import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LoginForm from "./Components/ReactRouterUsingApiFetchingAuthentication/LoginForm/indexHook";
import Home from "./Components/ReactRouterUsingApiFetchingAuthentication/Home";
import NotFound from "./Components/ReactRouterUsingApiFetchingAuthentication/NotFound";
import Products from "./Components/ReactRouterUsingApiFetchingAuthentication/Products";
import Cart from "./Components/ReactRouterUsingApiFetchingAuthentication/Cart";
import ProtectedRoute from "./Components/ReactRouterUsingApiFetchingAuthentication/ProtectedRoute";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
    <Route exact path="/login" element={<LoginForm />} />
      <Route  element = {<ProtectedRoute/>}>
        <Route exact path="/" element={<Home />} />
        <Route exact path ="/products" element = {<Products />} /> 
        <Route exact path = "/cart" element = {<Cart />} />
      </Route>
     
      <Route path = "/not-found" element = {<NotFound/>} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </Router>
);

export default App;
