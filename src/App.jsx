import { Container } from "react-bootstrap";
// import Todo from "./Components/Todo";
import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Users from "./Components/Users";
// import { useState } from "react";

function App() {
  return (
    <Container>
      <Users />
      {/* <Header />
      <h1>Hammaga Salom!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Counter /> */}
      {/* <Todo /> */}
    </Container>
  );
}

export default App;
