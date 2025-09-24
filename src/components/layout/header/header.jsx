import { Logo } from "../../ui/logo/logo";
import { Button } from "../../ui/button/button";
import { PageWrapper } from "../page-wrapper/page-wrapper";
import { StyledStyled } from "./header-styled";

export const Header = () => {
  return (
    <PageWrapper>
      <StyledStyled>
        <Logo />
        <Button>Купить</Button>
      </StyledStyled>
    </PageWrapper>
  );
};
