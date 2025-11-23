import {
  StyledOrderProperties,
  StyledOrderPropertiesItem,
} from "./order-properties-styled";
import { Text } from "../../../ui/text/text";

export const OrderProperties = ({
  energy,
  energyUnit,
  proteins,
  fats,
  carbohydrates,
}) => {
  return (
    <StyledOrderProperties>
      <StyledOrderPropertiesItem>
        <Text variant="caption2" mr="4px">
          Энергетическая ценность:
        </Text>
        <Text variant="caption1">{energy} ккал./</Text>
        <Text variant="caption1">{energyUnit} кДж.</Text>
      </StyledOrderPropertiesItem>
      <StyledOrderPropertiesItem>
        <Text variant="caption2" mr="4px">
          Пищевая ценность:
        </Text>
        <Text variant="caption1">{`белки - ${proteins} г.,`}</Text>{" "}
        <Text variant="caption1">{` жиры - ${fats} г., `}</Text>{" "}
        <Text variant="caption1">{` углеводы ${carbohydrates} г.; `}</Text>{" "}
        <Text variant="caption1"> на 100 г.</Text>
      </StyledOrderPropertiesItem>
    </StyledOrderProperties>
  );
};
