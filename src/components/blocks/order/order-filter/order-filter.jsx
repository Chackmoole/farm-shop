import { StyledOrderFilter } from "./order-filter-styled";
import { Text } from "../../../ui/text/text";

export const OrderFilter = ({ children }) => {
  return (
    <StyledOrderFilter>
      <Text variant="body2">Выберите продукты</Text>
      {children}
    </StyledOrderFilter>
  );
};
