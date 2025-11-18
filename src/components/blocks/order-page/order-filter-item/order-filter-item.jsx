import {
  StyledOrderFilterItem,
  StyledOrderFilterItemInput,
  StyledOrderFilterItemLabel,
} from "./order-filter-item-styled";
import { Text } from "../../../ui/text/text";

export const OrderFilterItem = ({ name }) => {
  return (
    <StyledOrderFilterItem>
      <StyledOrderFilterItemLabel>
        <Text variant="body1">{name}</Text>

        <StyledOrderFilterItemInput type="checkbox" />
      </StyledOrderFilterItemLabel>
    </StyledOrderFilterItem>
  );
};
