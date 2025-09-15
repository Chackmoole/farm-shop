import "./header-style.css";
import { Logo } from "../../ui/logo/logo";
import { Button } from "../../ui/button/button";
import { PageWrapper } from "../page-wrapper/page-wrapper";

export const Header = () => {
  return (
    <PageWrapper>
      <header className="header">
        <Logo />
        <Button>Купить</Button>
      </header>
    </PageWrapper>
  );
};
