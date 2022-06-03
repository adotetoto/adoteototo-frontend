import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Home from "./components/pages/Home";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Message from "./components/layout/Message";
import Navbar from "./components/layout/Navbar";
import { Context, UserProvider } from "./context/UserContext";
import Profile from "./components/pages/User/Profile";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/users/profile" element={<Profile />}></Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
};

export default App;
