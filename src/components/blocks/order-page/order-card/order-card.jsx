import {
  StyledOrderCard,
  StyledOrderCardBox,
  StyledOrderCardTab,
  StyledOrderCardTabs,
  StyledOrderCardWrapper,
  StyledOrderCardPrice,
} from "./order-card-styled";
import { Text } from "../../../ui/text/text";
import { useState } from "react";
import { OrderCharacteristics } from "../order-characteristics/order-characteristics";
import { OrderProperties } from "../order-properties/order-properties";

export const OrderCard = ({
  title,
  description,
  image,
  priceText,
  properties,
  characteristics,
}) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <StyledOrderCard>
      <img src={image} alt="" width={248} height={248} />
      <StyledOrderCardBox>
        <Text variant="h4" mb="16px">
          {title}
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
        <StyledOrderCardWrapper>
          {activeTab === "description" ? (
            <Text variant="caption1">{description}</Text>
          ) : null}
          {activeTab === "characteristics" ? (
            <OrderCharacteristics
              weight={characteristics.weight}
              beforeDate={characteristics.beforeDate}
              breed={characteristics.breed}
              place={characteristics.place}
            />
          ) : null}
          {activeTab === "properties" ? (
            <OrderProperties
              energy={properties.energy}
              nutritional={properties.nutritional}
            />
          ) : null}
        </StyledOrderCardWrapper>
        <StyledOrderCardPrice variant="caption2">
          {priceText}
        </StyledOrderCardPrice>
      </StyledOrderCardBox>
    </StyledOrderCard>
  );
};
