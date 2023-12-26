// import { useState } from "react";
// hook => ilgak, ilmoq

import { memo } from "react";

const Counter = ({ count, inc, dec }) => {
  console.log("Counter");
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={dec} className="btn btn-secondary">
        -
      </button>
      <span>{count}</span>
      <button onClick={inc} className="btn btn-secondary">
        +
      </button>
    </div>
  );
};

export default memo(Counter);
