import React, { useReducer, useState } from "react";
import Switch from "./switch";

const actionTypes = {
  toggle: "TOGGLE",
  on: "ON",
  off: "OFF",
};

function toggleReducer(state, action) {
  switch (action.type) {
    case actionTypes.toggle: {
      return { on: !state.on };
    }
    case actionTypes.on: {
      return { on: true };
    }
    case actionTypes.off: {
      return { on: false };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}
// note the `useToggle` function can be passed a reducer - IOC
function useToggle() {
  //const [on, setOnState] = useState(false);
  const [{ on }, dispatch] = useReducer(toggleReducer, { on: false });

  //const toggle = () => setOnState((o) => !o);
  //const setOn = () => setOnState(true);
  //const setOff = () => setOnState(false);

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const setOn = () => dispatch({ type: actionTypes.on });
  const setOff = () => dispatch({ type: actionTypes.off });

  return { on, toggle, setOn, setOff };
}

const Toggle = () => {
  const [clicksSinceReset, setClicksSinceReset] = useState(0);
  const tooManyClicks = clicksSinceReset >= 4;

  const { on, toggle, setOn, setOff } = useToggle();

  function handleClick() {
    toggle();
    setClicksSinceReset((count) => count + 1);
  }

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <Switch on={on} onClick={handleClick} />
      {tooManyClicks ? (
        <button onClick={() => setClicksSinceReset(0)}>Reset</button>
      ) : null}
    </div>
  );
};

export default Toggle;
