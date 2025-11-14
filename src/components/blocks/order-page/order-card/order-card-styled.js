import styled from "styled-components";

export const StyledOrderCard = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  width: 727px;
  background: ${(props) => props.theme.colors.colorWhite};
`;

export const StyledOrderCardBox = styled.div``;

export const StyledOrderCardTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledOrderCardTab = styled.div`
  background-color: ${(props) =>
    props.$isActiveTab
      ? props.theme.colors.colorGreen
      : props.theme.colors.colorGray};
  color: ${(props) =>
    props.$isActiveTab
      ? props.theme.colors.colorWhite
      : props.theme.colors.colorBlackText};
  padding: 8px 12px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;
`;
