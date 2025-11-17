import {
  StyledCardCharacteristics,
  StyledCardCharacteristicsItem,
} from "./card-characteristics-styled";
import { Text } from "../../../ui/text/text";

export const CardCharacteristics = ({ weight, beforeDate, breed, place }) => {
  return (
    <StyledCardCharacteristics>
      <StyledCardCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Масса:
        </Text>
        <Text variant="caption1">{weight}</Text>
      </StyledCardCharacteristicsItem>
      <StyledCardCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Срок годности:
        </Text>
        <Text variant="caption1">{beforeDate}</Text>
      </StyledCardCharacteristicsItem>
      <StyledCardCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Порода:
        </Text>
        <Text variant="caption1">{breed}</Text>
      </StyledCardCharacteristicsItem>
      <StyledCardCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Место происхождения:
        </Text>
        <Text variant="caption1">{place}</Text>
      </StyledCardCharacteristicsItem>
    </StyledCardCharacteristics>
  );
};
