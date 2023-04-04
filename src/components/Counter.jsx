import { useEffect } from "react";

// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const onClickAdd = () => {
//     setCount(count + 1);
//   };

const Counter = ({ count, setCount }) => {
  const onClickAdd = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Counter 컴포넌트가 생성된 상태입니다.");

    if (count > 0) {
      console.log("Counter 업데이트 되었습니다.");
    }

    return () => {
      console.log("Counter 제거");
    };
  }, [count]);
  // useEffect(()=>{},[추적하고 싶은 값])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-4xl">{count}</div>
      <button
        onClick={onClickAdd}
        className="bg-red-500 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
