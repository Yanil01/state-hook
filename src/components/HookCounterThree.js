// useState with objects
import React, { useState } from "react";

function HookCounterThree() {
  // State for managing first and last name
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Input for first name */}
      <input
        type="text"
        placeholder="Enter your first name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        style={{ marginRight: "10px" }}
      />

      {/* Input for last name */}
      <input
        type="text"
        placeholder="Enter your last name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        style={{ marginLeft: "10px" }}
      />

      {/* Display first name */}
      <h2 style={{ marginTop: "20px" }}>
        Your first name is - {name.firstName}
      </h2>

      {/* Display last name */}
      <h2>Your last name is - {name.lastName}</h2>

      {/* Display state object as JSON string */}
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
