import { NavBar } from "@components/UI";
import { Container } from "@components/Layout";

interface props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: props) => {
  return (
    <>
      <NavBar />
      <Container as="main">{children}</Container>
    </>
  );
};
