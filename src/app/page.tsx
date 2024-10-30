"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number>(1);
  const [array, setArray] = useState<any>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [sum, setSum] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  function addNumber() {
    if (typeof Number(value) != "number") {
      alert("value must be number only");
    }

    setArray((prev: any) => [...prev, Number(value)]);
    setNumber(number + 1);
    setValue("");
  }
  useEffect(() => {
    if (number == 7) {
      var sum = 0;
      array.map((number: number) => {
        sum += number;
      });
      setSum(sum);
      setIsVisible(false);
    }
  }, [number]);

  console.log("array", array);
  console.log("number", number);
  console.log("value", value);

  return (
    <div className="w-screen h-screen flex items-center justify-center responsive">
      {/* <div className="absolute top-20">
        <p>Xairiga udsand uuchlaarai hh</p>
        <p>Xairn bolgn gej helsen shvde </p>
      </div>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/heart-emoji-meanings-65c3b01e11012.jpg?crop=0.114xw:0.416xh;0.0170xw,0.0994xh&resize=980:*"
        className="w-[700px] h-100vw"
      /> */}
      {isVisible ? (
        <div>
          <input
            placeholder={"put number" + number.toString()}
            value={value}
            type="number"
            onChange={(e) => {
              setValue((prev: any) => e.target.value);
            }}
          />
          <button
            className="ml-[100px] border-black border-[1px] h-[50px] w-[50px]"
            onClick={addNumber}
          >
            +
          </button>
        </div>
      ) : (
        ""
      )}
      {isVisible ? (
        ""
      ) : (
        <div>
          <h1>{sum}</h1>
          <button
            onClick={() => {
              setValue("");
              setArray([]);
              setNumber(1);
              setSum(0);
              setIsVisible(true);
            }}
          >
            again
          </button>
        </div>
      )}
    </div>
  );
}
