import styled from "styled-components";

export const StyledFeatures = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

export const StyledFeaturesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  list-style-type: none;
  margin: 0 0 64px;
  padding: 0;
`;
