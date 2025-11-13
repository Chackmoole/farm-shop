import styled from "styled-components";
import { Text } from "../../../ui/text/text";

export const StyledOrderCard = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const StyledOrderCardBox = styled.div``;

export const StyledOrderCardTabs = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledOrderCardTab = styled.div`
  padding: 8px 12px;
  background-color: ${(props) =>
    props.$isActive
      ? props.theme.colors.colorGreen
      : props.theme.colors.colorGray};

  color: ${(props) => props.theme.colors.colorBlackText};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
`;

export const StyledOrderCardTabText = styled(Text)``;
