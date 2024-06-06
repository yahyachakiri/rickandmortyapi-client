import { NavBar } from "../UI/NavBar";
import { Container } from "./Container";

interface props{
  children: React.ReactNode;
}

export const PageLayout = ({children} : props) => {
  return (
    <>
    <NavBar />
    <Container as="main">{children}</Container>
    </>
  )
}