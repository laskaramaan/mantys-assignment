import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./components/About/About";
// import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
