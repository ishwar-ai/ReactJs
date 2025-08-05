import { useRef } from "react";

function ScrollExample() {
  const bottomRef = useRef(null); //  Escape Hatch

  const handleScroll = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" }); //  Escape Hatch: Browser API
  };

  return (
    <div>
      <button onClick={handleScroll}>Go to Bottom Section</button>

      <div style={{ height: "500px", background: "#f0f0f0", marginTop: "20px" ,textAlign: "center" }}>
        <p>Scroll down to see the bottom section</p>
      </div>

      <div
        ref={bottomRef}
        style={{ height: "200px", background: "#c0ffee", textAlign: "center", paddingTop: "50px" }}
      >
        This is the bottom section!
      </div>
    </div>
  );
}

export default ScrollExample;
