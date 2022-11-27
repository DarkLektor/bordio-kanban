import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 50px;
  background: var(--secondary);
  img {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  &.active img {
    transform: rotate(180deg);
  }
  &.active,
  &:hover {
    background: var(--light-gray);
  }
`;
export const ButtonWrapper = styled.div`
  position: relative;
`;
export const ChildWrapper = styled.div`
  padding: 6px;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  min-width: min-content;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;
export const ChildButton = styled.button`
  padding: 12px 8px;
  border-radius: 4px;
  min-width: 100%;
  text-align: left;
  white-space: nowrap;
  &.active,
  &:hover {
    background: var(--secondary);
  }
`;
