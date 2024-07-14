import "./App.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactBtn from "./components/ContactBtn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="zsec"></div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
      <ContactBtn />
    </div>
  );
}

export default App;
