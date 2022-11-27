import styled from "styled-components";

export const ToolsWrapper = styled.div`
  background: var(--secondary);
`;
export const Title = styled.h2`
  font-size: 18px;
  line-height: 21px;
  margin: 16px 24px;
`;
export const ToolsButton = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 14px;
  margin-right: 16px;
  position: relative;
  &.active {
    color: var(--main);
    background: #fff;
    border-radius: 0px 8px 8px 0px;
  }
  &.active:before {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    position: absolute;
    background: var(--main);
    top: 0;
    left: 0;
    bottom: 0;
  }
  img {
    width: 20px;
    object-fit: contain;
    object-position: center;
    margin-right: 14px;
  }
`;
