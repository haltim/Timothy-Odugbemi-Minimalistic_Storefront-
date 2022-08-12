import styled from "styled-components";

export const ProductListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CategoryHeaderWrapper = styled.div`
  margin-bottom: 103px;
  margin-top: 80px;
`;


export const CategoryItemsListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: -103px;
  gap: 56px;
`;
