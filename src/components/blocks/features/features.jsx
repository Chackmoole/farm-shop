import { FeaturesCard } from "./features-card/features-card";
import { PageWrapper } from "../../layout/page-wrapper/page-wrapper";
import { Button } from "../../ui/button/button";
import { FEATURES_CARDS } from "../../../mock/features-cards";
import { StyledFeatures, StyledFeaturesList } from "./features-styled";
import { Text } from "../../ui/text/text";

export const Features = () => {
  return (
    <PageWrapper>
      <StyledFeatures>
        <Text variant="h2" mb="64px">
          Почему фермерские продукты лучше?
        </Text>
        <StyledFeaturesList>
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
        </StyledFeaturesList>
        <Button>Купить</Button>
      </StyledFeatures>
    </PageWrapper>
  );
};
