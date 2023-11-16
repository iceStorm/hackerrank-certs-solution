import React, { useState } from "react";
import "./index.css";

function Dropdown({ options, labelText, onChange }) {
  return (
    <div className="elementSet">
      <select
        data-testid="dropdown"
        defaultValue={labelText}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      >
        {/* Do not remove this default option as this is needed in testing */}
        <option value={labelText} key={labelText} disabled>
          {labelText}
        </option>

        {options.map((o) => {
          return <option value={o}>{o}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
