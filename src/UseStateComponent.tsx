import React, { useState } from "react";

export default function UseStateComponent() {
  // Always pass in ta Generics to the useState function as otherwise the Array will be infered as never[]
  // and does not change to e.g. number[] one you start putting values in it
  const [arr, arrSet] = useState<number[]>([]);
  // useState with inital value of null
  const [name, nameSet] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet("Max")}>Set name </button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}
