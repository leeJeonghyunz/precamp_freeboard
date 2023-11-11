import { useState } from "react";

export default function StaticRoutingMovedPage(): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const aa = () => {
    setIsEdit((prev) => !prev);
  };
  console.log(isEdit);

  return (
    <>
      <button onClick={aa}></button>
    </>
  );
}

// 디바운싱으로 마지막?
