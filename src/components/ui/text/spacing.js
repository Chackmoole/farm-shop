import { css } from "styled-components";

export const spacing = css`
  ${(props) => {
    if (props.m) {
      return css`
        margin: ${props.m};
      `;
    }
  }}
  ${(props) => {
    if (props.$my) {
      return css`
        margin-top: ${props.$my};
        margin-bottom: ${props.$my};
      `;
    }
  }}
  ${(props) => {
    if (props.$mx) {
      return css`
        margin-left: ${props.$mx};
        margin-right: ${props.$mx};
      `;
    }
  }}
  ${(props) => {
    if (props.$mt) {
      return css`
        margin-top: ${props.$mt};
      `;
    }
  }}
  ${(props) => {
    if (props.$mr) {
      return css`
        margin-right: ${props.$mr};
      `;
    }
  }}
  ${(props) => {
    if (props.$mb) {
      return css`
        margin-bottom: ${props.$mb};
      `;
    }
  }}
  ${(props) => {
    if (props.$ml) {
      return css`
        margin-left: ${props.$ml};
      `;
    }
  }}
`;
