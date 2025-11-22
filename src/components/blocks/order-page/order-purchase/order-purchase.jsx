import {
  StyledOrderAdressInput,
  StyledOrderPurchase,
} from "./order-purchase-styled";
import { Text } from "../../../ui/text/text";
import { Button } from "../../../ui/button/button";

export const OrderPurchase = ({ price }) => {
  return (
    <StyledOrderPurchase>
      <Text variant="body2" mb="24px">
        Сделать заказ
      </Text>
      <StyledOrderAdressInput placeholder="Введите адрес доставки" />
      <Text variant="caption1" mb="8px">
        Цена
      </Text>
      <Text variant="h4" mb="32px">
        {price} руб.
      </Text>
      <Button>Купить</Button>
    </StyledOrderPurchase>
  );
};
