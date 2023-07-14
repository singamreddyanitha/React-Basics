import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LoginForm from "../LoginForm/indexHook";
import Home from "../Home";
import NotFound from "../NotFound";
import Products from "../Products";
import Cart from "../Cart";
import ProtectedRoute from "../ProtectedRoute";


const ParentComponent = () => (
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

export default ParentComponent;
