import { Logo } from "../../ui/logo/logo";
import { Button } from "../../ui/button/button";
import { PageWrapper } from "../page-wrapper/page-wrapper";
import { StyledNav, StyledStyled } from "./header-styled";
import { Link } from "react-router";

export const Header = () => {
  return (
    <PageWrapper>
      <StyledStyled>
        <Logo />
        <StyledNav>
          <Link to="/">Главная</Link>
          <Link to="/order">Заказ</Link>
        </StyledNav>

        <Button>Купить</Button>
      </StyledStyled>
    </PageWrapper>
  );
};
