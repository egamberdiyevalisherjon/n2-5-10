import { Container } from "react-bootstrap";
import Todo from "./Components/Todo";
import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Users from "./Components/Users";
// import { useState } from "react";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Acc from "./Components/Acc";
import { FloatButton } from "antd";

function App() {
  return (
    <Container>
      {/* <Users /> */}
      <Header />
      <h1>Hammaga Salom!</h1>
      <Acc />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<Details />} />
      </Routes>

      {/* <Counter /> */}
      <FloatButton.BackTop />
    </Container>
  );
}

export default App;
