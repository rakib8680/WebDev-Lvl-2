
"use client";

import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-center text-slate-200">{count}</h1>
      <div className="text-center flex gap-10">
        <button className="text-2xl text-slate-300 px-4 py-1 rounded-full border-2 border-slate-700 hover:bg-rose-900  transition-all duration-500" onClick={() => setCount(count - 1)} >Decrement</button>
        <button className="text-2xl text-slate-300 px-4 py-1 rounded-full border-2 border-slate-700 hover:bg-slate-500 hover:text-black transition-all duration-500" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  )
};

export default Counter;