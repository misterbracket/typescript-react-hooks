import React, { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onButtonClick = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input onClick={onButtonClick} ref={inputRef} />
    </div>
  );
}

export default UseRefComponent;
