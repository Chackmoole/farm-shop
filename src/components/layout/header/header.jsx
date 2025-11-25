import { Logo } from "../../ui/logo/logo";
import { Button } from "../../ui/button/button";
import { PageWrapper } from "../page-wrapper/page-wrapper";
import { StyledNav, StyledStyled } from "./header-styled";
import { Link, useNavigate } from "react-router";

export const Header = () => {
  let navigate = useNavigate();
  return (
    <PageWrapper>
      <StyledStyled>
        <Logo />
        <StyledNav>
          <Link to="/">Главная</Link>
          <Link to="/order">Заказ</Link>
        </StyledNav>

        <Button onClick={() => navigate("/order")}>Купить</Button>
      </StyledStyled>
    </PageWrapper>
  );
};
