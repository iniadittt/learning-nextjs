"use client";

import React from "react";
import Button from "./Button";

const Count = () => {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <div>
      <p
        style={{
          fontSize: counter > 10 ? counter * 2 : 10,
          color: counter > 15 ? "#0000ff" : "#000000",
        }}
      >
        {counter}
      </p>
      <div className="flex flex-row gap-2">
        {counter < 30 && (
          <Button
            simbol="+"
            warna={counter > 20 ? "#00ff00" : "#000000"}
            onClick={() =>
              counter < 30 && setCounter((counter: number) => counter + 1)
            }
          />
        )}
        {counter > 0 && (
          <Button
            simbol="-"
            warna="#ff0000"
            onClick={() =>
              counter > 0 && setCounter((counter: number) => counter - 1)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Count;
