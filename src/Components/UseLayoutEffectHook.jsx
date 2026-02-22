import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook = () => {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ background: "lightblue", padding: "20px" }}>
        Resize me!
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}

export default UseLayoutEffectHook;