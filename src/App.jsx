import ReactDOM from "react-dom/client";
import Contact from "./components/Contact";
import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


import Layout from "./components/Layout";
import TestMemo from "./components/TestMemo";
import Car from "./components/Car";




function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
     <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
     <div>
      <h1>Hi</h1>
      <TestMemo/>
      <Car brand={ carInfo }/>
     </div>
     </>
  );
}

export default App
