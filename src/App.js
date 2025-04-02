//import logo from './logo.svg';
import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
//import { LearnComponents } from './components/LearnComponents';

function App() {
  // const name = "React App";
  // const obj = {
  //   site : "greeks",
  //   sub: "react",
  //   version:6,
  //   greet : function(){
  //     return <h2>Good Moring {this.site}</h2>;
  //   }
  // }
  
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}


export default App;

