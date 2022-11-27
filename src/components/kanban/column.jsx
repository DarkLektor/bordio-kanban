import React from "react";
import Task from "./task";
import { ColumnStyle, TasksWrapper, Title } from "./column.styled";

export default function Column({ title, items = [], status }) {
  return (
    <ColumnStyle>
      <Title length={items.length}>{title}</Title>
      <TasksWrapper>
        {!items.length
          ? "Empty..."
          : items.map((item) => (
              <Task item={item} key={item.id} status={status} />
            ))}
      </TasksWrapper>
    </ColumnStyle>
  );
}
