import styled from "styled-components";

export const StyledOrderPage = styled.main`
  background-color: ${(props) => props.theme.colors.colorGray};
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const StyledOrderPageBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const StyledOrderCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
