import "./layout-style.css";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
