import { useRef, useEffect } from 'react';

function NameInput() {
  const inputRef = useRef(null); // Escape Hatch: reference to real DOM node

  useEffect(() => {
    //Escape hatch: using browser API to focus input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>Your Name:</label>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default NameInput;
