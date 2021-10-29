import styled from "styled-components";

export const RootWrapper = styled.main`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  height: 100vh;
  width: auto;

  @media screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

export const ColumnWrapper = styled.div``;
