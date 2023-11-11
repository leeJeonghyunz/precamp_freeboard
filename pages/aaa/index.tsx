import { useState } from "react";

export default function StaticRoutingMovedPage(): JSX.Element {
  const [text, setText] = useState("");

  const aa = (e) => {
    setText(e.target.value);
  };

  const bb = () => {
    setText("");
  };

  return (
    <>
      <input value={text} onChange={aa} />
      <button onClick={bb}> 초기화버튼</button>
      <p>{text}</p>
    </>
  );
}

// 디바운싱으로 마지막?
