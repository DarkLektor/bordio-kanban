import styled from "styled-components";

export const DropdownWrapper = styled.div`
  padding: 14px 0 0;
  &.active button img {
    transform: rotate(0deg);
  }
  button {
    display: flex;
    align-items: center;
    background: transparent;
    color: #fff;
    width: 100%;
    padding: 4px 16px;
    transition: background 0.3s ease;
    img {
      transform: rotate(-90deg);
      transition: transform 0.3s ease;
    }
    &:hover {
      background: var(--sidebar-secondary);
    }
  }
`;
export const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 0;
  max-height: max-content;
  padding: 0 16px;
  margin-top: 0;
  overflow: hidden;
  transition: height 0.3s ease;

  &.active {
    height: 100%;
  }
  a:first-child {
    margin-top: 16px;
  }
  a {
    text-decoration: none;
    color: var(--gray);
    margin-bottom: 18px;
    transition: color 0.3s ease;
    &:hover {
      color: #fff;
    }
  }
`;
