import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{ cursor: "pointer" }}>
        Count {count}
      </button>
    </div>
  );
}

export default HookCounter;
