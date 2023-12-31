import React from "react"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./Components/ReactRouter/Header";
import About from "./Components/ReactRouter/About";
import Contact from "./Components/ReactRouter/Contact";
// import Home from "./Components/ReactRouter/Home";
import BlogsList from "./Components/ReactRouter/BlogsList/index"
import NotFound from "./Components/ReactRouter/NotFound"; 
import BlogItemDetails from "./Components/ReactRouter/BlogItemDetails/indexHook";

import "./App.css"

const App = () => (
  <Router>
    <Header />
    <Routes>

      {/* <Home/>
      <About/>
      <Contact/> */}
     
     {/* <Route exact path = "/" element = {<Home />} /> */}
       <Route exact path = "/"  element = {<BlogsList />} />
      <Route  exact path = "/about"  element = {<About/>} />
      <Route  exact path = "/contact"  element = {<Contact/>} /> 
      <Route path = "/blogs/:id" element = {<BlogItemDetails/>} />
      <Route path = "*" element = {<NotFound/>} />

      {/* <Route path = "*" element = {<Navigate to = "/about" />} /> */}
      
    </Routes>
  </Router>
);

export default App;
