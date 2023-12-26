import { Container } from "react-bootstrap";
import Todo from "./Components/Todo";
// import { Route, Routes } from "react-router-dom";
// import Counter from "./Components/Counter";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Header from "./Components/Header";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // function countInc() {
  //   setCount(count + 1);
  // }

  // function countDec() {
  //   setCount(count - 1);
  // }

  return (
    <Container>
      {/* <Header />
      <h1>Hammaga Salom!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Counter count={count} inc={countInc} dec={countDec} /> */}
      <Todo />
    </Container>
  );
}

export default App;
