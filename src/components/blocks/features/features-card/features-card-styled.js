import styled, { css } from "styled-components";
import { Text } from "../../../ui/text/text";

export const StyledFeaturesCard = styled.li`
  width: 540px;
  padding: 20px;
  ${(props) => {
    return props.$isFarm
      ? css`
          background-color: ${props.theme.colors.colorLightGreen};
        `
      : css`
          background-color: ${props.theme.colors.colorLigthPink};
        `;
  }}
`;

export const StyledFeaturesCardBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledFeaturesCardTitle = styled(Text)`
  ${(props) => console.log(props)}
  ${(props) => {
    return props.$isFarm
      ? css`
          background-color: ${props.theme.colors.colorGreen};
        `
      : css`
          background-color: ${props.theme.colors.colorDarkOrange};
        `;
  }}

  padding: 2px 10px;
  color: ${(props) => props.theme.colors.colorWhite};
`;

export const StyledFeaturesCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;
