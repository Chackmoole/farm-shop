import styled from "styled-components";
import mark from "../../../../assets/svg/check-mark.svg";

export const StyledOrderFilterItem = styled.li`
  list-style: none;
`;

export const StyledOrderFilterItemLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 24px;
    height: 24px;
    background-color: ${(props) => props.theme.colors.colorOrange};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  }

  &::after {
    position: absolute;
    content: url("${mark}");
    top: 47%;
    transform: translateY(-50%);
    right: 4px;
    width: 16px;
    height: 16px;
  }
`;

export const StyledOrderFilterItemInput = styled.input`
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
`;
