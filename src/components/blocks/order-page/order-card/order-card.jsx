import {
  StyledOrderCard,
  StyledOrderCardBox,
  StyledOrderCardTab,
  StyledOrderCardTabs,
} from "./order-card-styled";
import { Text } from "../../../ui/text/text";
import { useState } from "react";

export const OrderCard = ({ title, description, image }) => {
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
        {activeTab === "description" ? <Text>{description}</Text> : null}
      </StyledOrderCardBox>
    </StyledOrderCard>
  );
};
