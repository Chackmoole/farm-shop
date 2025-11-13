import {
  StyledOrderCard,
  StyledOrderCardBox,
  StyledOrderCardTab,
  StyledOrderCardTabs,
  StyledOrderCardTabText,
} from "./order-card-styled";
import chicken from "../../../../assets/img/products/chicken.jpg";
import { Text } from "../../../ui/text/text";
import { useState } from "react";

export const OrderCard = () => {
  const [isActive, setActive] = useState(true);

  return (
    <StyledOrderCard>
      <img src={chicken} alt="" width={248} height={248} />
      <StyledOrderCardBox>
        <Text variant="h4" mb="16px">
          Филе бедра цыпленка
        </Text>
        <StyledOrderCardTabs>
          <StyledOrderCardTab $isActive={isActive}>
            <StyledOrderCardTabText variant="caption1">
              Описание
            </StyledOrderCardTabText>
          </StyledOrderCardTab>
          <StyledOrderCardTab>
            <StyledOrderCardTabText variant="caption1">
              Характеристики
            </StyledOrderCardTabText>
          </StyledOrderCardTab>
          <StyledOrderCardTab>
            <StyledOrderCardTabText variant="caption1">
              Свойства
            </StyledOrderCardTabText>
          </StyledOrderCardTab>
        </StyledOrderCardTabs>
      </StyledOrderCardBox>
    </StyledOrderCard>
  );
};
