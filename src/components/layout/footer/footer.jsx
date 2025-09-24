import { Logo } from "../../ui/logo/logo";
import { Text, defaultVariantMapping } from "../../ui/text/text";
import { PageWrapper } from "../page-wrapper/page-wrapper";
import { StyledFooter } from "./footer-styled";

export const Footer = () => {
  return (
    <PageWrapper>
      <StyledFooter>
        <Logo />
        <Text variant={defaultVariantMapping.body1}>Создано 2025</Text>
      </StyledFooter>
    </PageWrapper>
  );
};
