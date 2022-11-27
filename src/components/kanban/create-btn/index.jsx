import React from "react";
import { Button, Wrapper } from "./create-btn.styled";

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
