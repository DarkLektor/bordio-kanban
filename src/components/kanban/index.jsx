import React, { useState } from "react";
import Column from "./column";
import { TasksList } from "./tasks";
import { KanbanList, KanbanWrapper } from "./kanban.styled";
import CreateBtn from "./createBtn";

export default function Kanban() {
  const [tasksList, setTaskList] = useState(() => new TasksList());

  return (
    <KanbanWrapper>
      <KanbanList>
        {!Object.keys(tasksList).length
          ? "Empty..."
          : Object.keys(tasksList).map((key) => (
              <Column {...tasksList[key]} key={key} />
            ))}
        <CreateBtn />
      </KanbanList>
    </KanbanWrapper>
  );
}
