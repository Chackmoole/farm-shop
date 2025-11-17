import {
  StyledOrderProperties,
  StyledOrderPropertiesItem,
} from "./order-properties-styled";
import { Text } from "../../../ui/text/text";

export const OrderProperties = ({ energy, nutritional }) => {
  return (
    <StyledOrderProperties>
      <StyledOrderPropertiesItem>
        <Text variant="caption2" mr="4px">
          Энергетическая ценность:
        </Text>
        <Text variant="caption1">{energy}</Text>
      </StyledOrderPropertiesItem>
      <StyledOrderPropertiesItem>
        <Text variant="caption2" mr="4px">
          Пищевая ценность:
        </Text>
        <Text variant="caption1">{nutritional}</Text>
      </StyledOrderPropertiesItem>
    </StyledOrderProperties>
  );
};
