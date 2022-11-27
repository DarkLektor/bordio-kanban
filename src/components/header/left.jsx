import React from "react";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 50px;
  &.blue {
    background: var(--main);
    color: #fff;
    &:hover {
      filter: grayscale(0.5);
    }
  }
`;

export default function Left() {
  return (
    <ButtonsWrapper>
      <Button className="blue">
        <img src="/icons/plus.svg" alt="Add new" />
        <span>Add new</span>
      </Button>
    </ButtonsWrapper>
  );
}
