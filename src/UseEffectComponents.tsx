import React, { useEffect, useState } from "react";

function UseEffectComponents() {
  const [val, valSet] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => {
      // Notice that valSet in this case takes a Function as parameter
      valSet((v) => v + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return <div>{val}</div>;
}

export default UseEffectComponents;
