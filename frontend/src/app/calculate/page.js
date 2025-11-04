"use client";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0);

  const calcSum = (a, b) => {
    setSum(a + b);
  };
  const findMax = (a, b, c) => {
    setMax(Math.max(a, b, c));
  };
  const findAvg = (a, b, c) => {
    setAvg((a + b + c) / 3);
  };

  return (
    <div className="h-screen w-screen bg-white p-2 flex flex-col gap-4 text-black">
      <div>
        <input
          className="border border-black mr-2"
          placeholder="Enter text"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim()) {
              setData([...data, e.target.value]);
              e.target.value = "";
            }
          }}
        />
        <div>
          {data.map((item, i) => (
            <span key={i} className="mr-2">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Sum */}
      <div>
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="a"
          id="sumA"
        />
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="b"
          id="sumB"
        />
        <button
          className="border border-black px-2"
          onClick={() => {
            const a = parseFloat(document.getElementById("sumA").value) || 0;
            const b = parseFloat(document.getElementById("sumB").value) || 0;
            calcSum(a, b);
          }}
        >
          Calc Sum
        </button>
        <span className="ml-2">Sum: {sum}</span>
      </div>

      {/* Max */}
      <div>
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="a"
          id="maxA"
        />
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="b"
          id="maxB"
        />
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="c"
          id="maxC"
        />
        <button
          className="border border-black px-2"
          onClick={() => {
            const a = parseFloat(document.getElementById("maxA").value) || 0;
            const b = parseFloat(document.getElementById("maxB").value) || 0;
            const c = parseFloat(document.getElementById("maxC").value) || 0;
            findMax(a, b, c);
          }}
        >
          Find Max
        </button>
        <span className="ml-2">Max: {max}</span>
      </div>

      {/* Avg */}
      <div>
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="a"
          id="avgA"
        />
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="b"
          id="avgB"
        />
        <input
          type="number"
          className="border border-black mr-2"
          placeholder="c"
          id="avgC"
        />
        <button
          className="border border-black px-2"
          onClick={() => {
            const a = parseFloat(document.getElementById("avgA").value) || 0;
            const b = parseFloat(document.getElementById("avgB").value) || 0;
            const c = parseFloat(document.getElementById("avgC").value) || 0;
            findAvg(a, b, c);
          }}
        >
          Find Avg
        </button>
        <span className="ml-2">Avg: {avg}</span>
      </div>
    </div>
  );
}
