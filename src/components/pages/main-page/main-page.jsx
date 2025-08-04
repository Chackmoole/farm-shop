import "./main-page-style.css";
import { About } from "../../blocks/about/about";
import { Features } from "../../blocks/features/features";

export const MainPage = () => {
  return (
    <main className="main-page">
      <About />
      <Features />
    </main>
  );
};
