import { FeaturesCard } from "./features-card/features-card";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import { Title, TitleVariants } from "../../ui/title/title";
import { Button } from "../../ui/button/button";
import "./features-style.css";

export const Features = () => {
  return (
    <PageWrapper>
      <section className="features">
        <Title variant={TitleVariants.h2} className="features__title">
          Почему фермерские продукты лучше?
        </Title>
        <ul className="features__list">
          <FeaturesCard />
        </ul>
        <Button>Купить</Button>
      </section>
    </PageWrapper>
  );
};
