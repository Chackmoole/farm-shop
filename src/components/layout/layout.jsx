import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { StyledLayout } from "./layout-styled";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};
