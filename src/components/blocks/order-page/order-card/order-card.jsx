import {
  StyledOrderCard,
  StyledOrderCardBox,
  StyledOrderCardTab,
  StyledOrderCardTabs,
} from "./order-card-styled";
import chicken from "../../../../assets/img/products/chicken.jpg";
import { Text } from "../../../ui/text/text";
import { useState } from "react";

export const OrderCard = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <StyledOrderCard>
      <img src={chicken} alt="" width={248} height={248} />
      <StyledOrderCardBox>
        <Text variant="h4" mb="16px">
          Филе бедра цыпленка
        </Text>
        <StyledOrderCardTabs>
          <StyledOrderCardTab
            $isActiveTab={activeTab === "description"}
            onClick={() => setActiveTab("description")}
          >
            <Text variant="caption1">Описание</Text>
          </StyledOrderCardTab>
          <StyledOrderCardTab
            $isActiveTab={activeTab === "characteristics"}
            onClick={() => setActiveTab("characteristics")}
          >
            <Text variant="caption1">Характеристики</Text>
          </StyledOrderCardTab>
          <StyledOrderCardTab
            $isActiveTab={activeTab === "properties"}
            onClick={() => setActiveTab("properties")}
          >
            <Text variant="caption1">Свойства</Text>
          </StyledOrderCardTab>
        </StyledOrderCardTabs>
      </StyledOrderCardBox>
    </StyledOrderCard>
  );
};
