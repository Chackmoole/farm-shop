import {
  StyledOrderAddressInput,
  StyledOrderOrderBuyButton,
  StyledOrderPurchase,
} from "./order-purchase-styled";
import { Text } from "../../../ui/text/text";

export const OrderPurchase = ({
  price,
  isAvailable,
  onClick,
  onChange,
  inputValue,
}) => {
  return (
    <StyledOrderPurchase>
      <Text variant="body2" mb="24px">
        Сделать заказ
      </Text>
      <StyledOrderAddressInput
        placeholder="Введите адрес доставки"
        onChange={onChange}
        value={inputValue}
      />
      <Text variant="caption1" mb="8px">
        Цена
      </Text>
      <Text variant="h4" mb="32px">
        {price} руб.
      </Text>
      <StyledOrderOrderBuyButton disabled={!isAvailable} onClick={onClick}>
        Купить
      </StyledOrderOrderBuyButton>
    </StyledOrderPurchase>
  );
};
