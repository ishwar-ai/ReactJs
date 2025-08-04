function Button({ onClick }: { onClick: () => void }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default function App() {
  const handleClick = () => {
    alert("Hello from compiler!");
  };

  return <Button onClick={handleClick} />;
}
