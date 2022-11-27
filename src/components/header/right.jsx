import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23px;
`;
const InputWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 13px;
    right: 12px;
    width: 14px;
    object-fit: contain;
    object-position: center;
  }
`;
const Input = styled.input`
  padding: 12px 16px;
  border-radius: 50px;
  background: var(--secondary);
  color: var(--gray);
  border: none;
  outline: none;
`;
const NotificationBtn = styled.button`
  border-radius: 100%;
  padding: 6px;
  width: 32px;
  height: 32px;
  position: relative;
  &:hover {
    background: var(--light-gray);
  }
  &:after {
    content: "99+";
    position: absolute;
    left: 50%;
    bottom: 50%;
    padding: 4px;
    background: #f21247;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    line-height: 10px;
  }
  img {
    height: 20px;
    object-fit: contain;
    object-position: center;
  }
`;
const UserAvatar = styled.a`
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default function Right() {
  return (
    <Wrapper>
      <InputWrapper>
        <Input placeholder="Search..." />
        <img src="/icons/search.svg" alt="search" />
      </InputWrapper>
      <NotificationBtn>
        <img src="/icons/bell.svg" alt="notification" />
      </NotificationBtn>
      <UserAvatar>
        <img src="/img/user.jpg" alt="user avatar" />
      </UserAvatar>
    </Wrapper>
  );
}
