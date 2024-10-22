import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current!.focus();
  }

  return (
    <div>
      <h1>Focus Input</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
