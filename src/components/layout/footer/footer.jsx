import "./footer-style.css";
import { Logo } from "../../ui/logo/logo";
import { Text, defaultVariantMapping } from "../../ui/text/text";
import { PageWrapper } from "../page-wrapper/page-wrapper";

export const Footer = () => {
  return (
    <PageWrapper className="footer-wrapper">
      <footer className="footer">
        <Logo />
        <Text variant={defaultVariantMapping.body1}>Создано 2025</Text>
      </footer>
    </PageWrapper>
  );
};
