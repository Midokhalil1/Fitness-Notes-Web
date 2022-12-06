import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Notes from "./pages/Notes";
import Home from "./pages/Home";
import "./assets/Styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Header user={user}/>

      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login setUser={setUser} />} />
            <Route path="/sign-up" element={<Signup setUser={setUser} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Notes" element={<Notes setUser={setUser} />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
