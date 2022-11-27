import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  color: var(--gray);
  white-space: nowrap;
  img {
    width: 13px;
    height: 13px;
    object-fit: contain;
    object-position: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--column-border);
  border-left: 1px solid var(--column-border);
  padding: 30px 25px 16px;
  align-self: start;
  width: 350px;
  flex-shrink: 0;
`;

export default function CreateBtn() {
  return (
    <Wrapper>
      <Button>
        <img src="/icons/plus-gray.svg" alt="create status" />
        <span>Create status</span>
      </Button>
    </Wrapper>
  );
}
