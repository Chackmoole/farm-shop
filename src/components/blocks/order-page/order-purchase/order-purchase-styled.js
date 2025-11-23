import styled from "styled-components";
import { Button } from "../../../ui/button/button";

export const StyledOrderPurchase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  background-color: ${(props) => props.theme.colors.colorWhite};
`;

export const StyledOrderAddressInput = styled.input`
  min-height: 48px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  border: none;
  background-color: ${(props) => props.theme.colors.colorGray};
  padding: 14px 12px;
  margin-bottom: 20px;

  &::placeholder {
    display: inline-block;
    font-family: ${(props) => props.theme.fonts.fontsFamily};
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme.colors.colorBlackText};
  }
`;

export const StyledOrderOrderBuyButton = styled(Button)`
  &:disabled {
    background-color: ${(props) => props.theme.colors.colorGray};
    color: ${(props) => props.theme.colors.colorBlackText};
    opacity: 50%;
    box-shadow: none;
    cursor: not-allowed;
    
    &:hover {
  }
`;
