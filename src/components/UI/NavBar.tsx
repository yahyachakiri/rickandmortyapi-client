import { Link } from "react-router-dom";
import { Container } from "../Layout/Container";

export const NavBar = () => {
  return (
    <Container as="header">
      <nav className="py-5 flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/favorites">My favorites</Link>
      </nav>
    </Container>
  );
};
