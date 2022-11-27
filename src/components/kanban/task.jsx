import React, { useMemo } from "react";
import { TaskStyle } from "./task.styled";

export default function Task({ item, status }) {
  const isCompleted = useMemo(() => {
    return status === "complete";
  }, [status]);

  return (
    <TaskStyle color={item.color} isCompleted={isCompleted}>
      <p>{item.text}</p>
      <span>{item.time}</span>
    </TaskStyle>
  );
}
