import styled from "styled-components";

export const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  flex-shrink: 0;
  min-height: 100%;
  &:first-child div {
    padding-left: 20px;
  }
`;
export const Title = styled.h4`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--column-border);
  padding: 27px 25px 15px;
  &:after {
    content: "${({ length }) => length}";
    margin-left: 10px;
    padding: 2px 9px;
    font-size: 14px;
    line-height: 16px;
    border-radius: 100px;
    background: var(--light-gray);
    color: var(--gray);
    font-weight: 400;
  }
`;
export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 40px 10px;
  border-right: 1px solid var(--column-border);
  min-height: 100%;
`;
