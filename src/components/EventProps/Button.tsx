import React from "react";
import { InputChange } from "./InputChange";

type ButtonProps = {
  handleClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick}>Event Props HandleClick</button>
      <br />
      <ButtonEventProps
        handleClick={(event, id) => {
          console.log("Button Mouse Event Clicked", event, id);
        }}
      />
      <h2>Input box value and onChange Event</h2>
      <InputChange value=" " handleChange={(event) => console.log(event)} />
    </>
  );
};

type ButtonEventProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const ButtonEventProps = (props: ButtonEventProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>
      Mouse Event HandleClick
    </button>
  );
};
