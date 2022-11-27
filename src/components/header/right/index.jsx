import React from "react";
import {
  Input,
  InputWrapper,
  NotificationBtn,
  UserAvatar,
  Wrapper,
} from "./right.styled";

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
