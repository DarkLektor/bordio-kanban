import React from "react";
import { Title, ToolsButton, ToolsWrapper } from "./tools.styled";

export default function Tools() {
  return (
    <ToolsWrapper>
      <Title>Tools</Title>
      <ToolsButton>
        <img src="/icons/roadmap.svg" alt="roadmap" />
        <span>Roadmap</span>
      </ToolsButton>
      <ToolsButton className="active">
        <img src="/icons/calendar.svg" alt="calendar" />
        <span>Schedule</span>
      </ToolsButton>
      <ToolsButton>
        <img src="/icons/tasks.svg" alt="tasks" />
        <span>Tasks</span>
      </ToolsButton>
      <ToolsButton>
        <img src="/icons/roadmap.svg" alt="roadmap" />
        <span>Roadmap</span>
      </ToolsButton>
      <ToolsButton>
        <img src="/icons/notes.svg" alt="notes" />
        <span>Notes</span>
      </ToolsButton>
      <ToolsButton>
        <img src="/icons/files.svg" alt="files" />
        <span>Files</span>
      </ToolsButton>
    </ToolsWrapper>
  );
}
