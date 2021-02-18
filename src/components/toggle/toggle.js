import React, { useState } from "react";
import Switch from "./switch";
function useToggle() {
  const [on, setOnState] = useState(false);

  const toggle = () => setOnState((o) => !o);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);

  return { on, toggle, setOn, setOff };
}

const Toggle = () => {
  const { on, toggle, setOn, setOff } = useToggle();

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <Switch on={on} onClick={toggle} />
    </div>
  );
};

export default Toggle;
