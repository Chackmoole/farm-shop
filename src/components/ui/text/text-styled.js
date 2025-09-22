import styled from "styled-components";
import { textVariants } from "./text-variants";
import { spacing } from "./spacing";

export const StyledText = styled.span`
  display: inline-block;
  font-family: ${(props) => props.theme.FONTS.fontsFamily};
  ${textVariants}
  ${spacing}
`;
