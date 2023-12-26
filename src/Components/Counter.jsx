import { useState } from "react";
// hook => ilgak, ilmoq

import { memo } from "react";

const Counter = () => {
  const [count, setCount] = useState(+localStorage.getItem("count") || 0);

  function countInc() {
    if (count === 10) return;

    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  }

  function countDec() {
    if (count === 0) return;

    setCount(count - 1);
    localStorage.setItem("count", count - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={countDec} className="btn btn-secondary">
        -
      </button>
      <span>{count}</span>
      <button onClick={countInc} className="btn btn-secondary">
        +
      </button>
    </div>
  );
};

export default memo(Counter);
