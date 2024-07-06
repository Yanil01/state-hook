import React, { useState } from "react";

function HookCounterTwo() {
  // Initial state
  const initialCount = 0;

  // useState hook to manage state
  const [count, setCount] = useState(initialCount);

  // Function to increment count by 5
  const incrementFive = () => {
    // Using a loop to increment count by 1 for 5 times
    for (let i = 0; i < 5; i++) {
      // Using the functional form of setState to update count based on previous state
      setCount((prevCount) => prevCount + 1);
    }
  };

  // JSX rendering
  return (
    <div>
      {/* Displaying the current count */}
      Count : {count}
      {/* Button to reset count to initial value */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* Button to increment count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Button to decrement count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* Button to increment count by 5 */}
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
