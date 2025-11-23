import {
  StyledOrderCharacteristics,
  StyledOrderCharacteristicsItem,
} from "./order-characteristics-styled";
import { Text } from "../../../ui/text/text";

export const OrderCharacteristics = ({ weight, beforeDate, breed, place }) => {
  return (
    <StyledOrderCharacteristics>
      <StyledOrderCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Масса:
        </Text>
        <Text variant="caption1">{weight}</Text>
      </StyledOrderCharacteristicsItem>
      <StyledOrderCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Срок годности:
        </Text>
        <Text variant="caption1">{beforeDate}</Text>
      </StyledOrderCharacteristicsItem>
      <StyledOrderCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Порода:
        </Text>
        <Text variant="caption1">{breed}</Text>
      </StyledOrderCharacteristicsItem>
      <StyledOrderCharacteristicsItem>
        <Text variant="caption2" mr="4px">
          Место происхождения:
        </Text>
        <Text variant="caption1">{place}</Text>
      </StyledOrderCharacteristicsItem>
    </StyledOrderCharacteristics>
  );
};
