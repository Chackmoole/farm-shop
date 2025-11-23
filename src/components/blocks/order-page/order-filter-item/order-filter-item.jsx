import { Text } from "../../../ui/text/text";

import {
  StyledOrderFilterItem,
  StyledOrderFilterItemLabel,
  StyledOrderFilterItemInput,
} from "./order-filter-item-styled";

export const OrderFilterItem = ({ name, onChange, isChecked }) => {
  return (
    <StyledOrderFilterItem>
      <StyledOrderFilterItemLabel onChange={onChange} $isChecked={isChecked}>
        <Text variant="body1">{name}</Text>

        <StyledOrderFilterItemInput type="checkbox" />
      </StyledOrderFilterItemLabel>
    </StyledOrderFilterItem>
  );
};
