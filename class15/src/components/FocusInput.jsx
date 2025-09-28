import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4 space-y-2">
      <input
        type="text"
        ref={inputRef}
        placeholder="Click button to focus"
        className="border p-2 rounded"
      />
      <button
        onClick={handleFocus}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
