import { Link, useLocation, useMatch } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/products">Products</Link>
    </header>
  );
};

export default Header;
