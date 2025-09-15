import { FeaturesCard } from "./features-card/features-card";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import { Title, TitleVariants } from "../../ui/title/title";
import { Button } from "../../ui/button/button";
import "./features-style.css";
import { FEATURES_CARDS } from "../../../mock/features-cards";

export const Features = () => {
  return (
    <PageWrapper>
      <section className="features">
        <Title variant={TitleVariants.h2} className="features__title">
          Почему фермерские продукты лучше?
        </Title>
        <ul className="features__list">
          {FEATURES_CARDS.map((card) => (
            <FeaturesCard
              key={card.id}
              img={card.img}
              title={card.title}
              description={card.description}
              subtitle={card.subtitle}
              isFarm={card.isFarm}
            />
          ))}
        </ul>
        <Button>Купить</Button>
      </section>
    </PageWrapper>
  );
};
