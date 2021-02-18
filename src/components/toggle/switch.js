import React from "react";
import "./switch.styles.css";

const noop = () => {};

function Switch({
  on,
  className = "",
  "arial-label": arialLabel,
  onClick,
  ...props
}) {
  const btnClassName = [
    className,
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label aria-label={arialLabel || "Toggle"} style={{ display: "block" }}>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={noop}
        onClick={onClick}
        data-testid="toggle-input"
      />

      <span className={btnClassName} {...props} />
    </label>
  );
}

export default Switch;
