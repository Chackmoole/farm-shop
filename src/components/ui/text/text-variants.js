import { css } from "styled-components";

export const textVariants = css`
  ${({ $variant }) => {
    switch ($variant) {
      case "h1":
        return css`
          font-size: 44px;
          line-height: 115%;
          font-weight: 700;
        `;
      case "h2":
        return css`
          font-size: 36px;
          line-height: 115%;
          font-weight: 700;
        `;
      case "h3":
        return css`
          font-size: 32px;
          line-height: 115%;
          font-weight: 700;
        `;
      case "subtitle":
        return css`
          font-size: 24px;
          line-height: 115%;
          font-weight: 700;
        `;
      case "body1":
        return css`
          font-size: 18px;
          line-height: 150%;
          font-weight: 400;
        `;
      case "body2":
        return css`
          font-size: 18px;
          line-height: 150%;
          font-weight: 700;
        `;
      case "caption1":
        return css`
          font-size: 14px;
          line-height: 130%;
          font-weight: 400;
        `;
      case "caption2":
        return css`
          font-size: 14px;
          line-height: 130%;
          font-weight: 700;
        `;
      default:
        return css`
          font-size: 18px;
          line-height: 150%;
          font-weight: 400;
        `;
    }
  }}
`;
