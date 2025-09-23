import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  height: 100%;
}
body,
html, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => {
    return props.theme.fonts.fontFamily;
  }};
  font-size: ${(props) => props.theme.fonts.fontSizeDefault};
  font-weight: 700;
  color: ${(props) => props.theme.colors.colorBlackText};
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;
