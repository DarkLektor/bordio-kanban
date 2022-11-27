import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23px;
`;
export const InputWrapper = styled.div`
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
export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 50px;
  background: var(--secondary);
  color: var(--gray);
  border: none;
  outline: none;
`;
export const NotificationBtn = styled.button`
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
export const UserAvatar = styled.a`
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
