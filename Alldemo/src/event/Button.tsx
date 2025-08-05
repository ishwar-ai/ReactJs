export function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export const ButtonEvent = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};
