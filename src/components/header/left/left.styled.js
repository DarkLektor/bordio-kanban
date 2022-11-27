import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 50px;
  background: var(--main);
  color: #fff;
  &:hover {
    filter: grayscale(0.5);
  }
`;
