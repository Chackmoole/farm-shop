import { Text } from "../../../ui/text/text";
import {
  StyledFeaturesCard,
  StyledFeaturesCardBox,
  StyledFeaturesCardInner,
  StyledFeaturesCardTitle,
} from "./features-card-styled";

export const FeaturesCard = ({ title, description, subtitle, img, isFarm }) => {
  return (
    <StyledFeaturesCard $isFarm={isFarm}>
      <StyledFeaturesCardBox>
        <img src={img} alt="" width={52} height={52} />
        <StyledFeaturesCardInner>
          <StyledFeaturesCardTitle $isFarm={isFarm} variant="caption1">
            {subtitle}
          </StyledFeaturesCardTitle>
          <Text variant="body2">{title}</Text>
        </StyledFeaturesCardInner>
      </StyledFeaturesCardBox>
      <Text>{description}</Text>
    </StyledFeaturesCard>
  );
};
