import React, { useState } from "react";
import Scene from "./components/Scene";

const App = () => {
  const [interact, setInteract] = useState(false);
  const [color, setColor] = useState("#000");
  return (
    <div className=" h-screen w-full">
      <Scene interact={interact} color={color} />

      <div className="absolute top-0 left-0 w-full h-full flex pointer-events-none p-10 pb-[5vw] font-light">
        <div className=" h-full w-1/2 text-white flex flex-col justify-between">
          <div className=" mt-[12vw]">
            <h1
              className={`text-7xl uppercase ${
                interact ? "opacity-0" : "opacity-100"
              } transition-all duration-700 ease-in-out`}
            >
              {" "}
              Samsung
            </h1>
            <h1
              className={`text-7xl uppercase ${
                interact ? "opacity-0" : "opacity-100"
              } transition-all duration-700 ease-in-out`}
            >
              {" "}
              Studio <i className="ri-bard-line font-extralight text-5xl"></i>
            </h1>
          </div>
          <p
            className={`${
              interact ? "opacity-0" : "opacity-70"
            } w-[55%] transition-all duration-700 ease-in-out`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            delectus nulla earum nobis. Reiciendis, adipisci.
          </p>
        </div>
        <div className=" h-full w-1/2 text-white flex justify-end">
          <div
            className={` mt-[12vw] ${
              interact ? "opacity-0" : "opacity-100"
            }  transition-all duration-700 ease-in-out`}
          >
            <h1 className={`text-7xl text-right`}>DESIGN</h1>
            <h1 className={`text-7xl text-right`}>YOUR</h1>
            <h1 className={`text-7xl text-right`}>TASTE</h1>
          </div>
        </div>
        <button
          onClick={() => setInteract(!interact)}
          className="px-6 border-[1px] border-zinc-600 py-2 pointer-events-auto absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-md"
        >
          INTERACT
        </button>

        <div className={`p-10 absolute h-full w-[30%] flex flex-col items-center justify-center top-0 left-0 text-white ${interact ? "opacity-100" : "opacity-0"}  transition-all duration-700 ease-in-out`}>
          <h1 className=" text-5xl">COLORS</h1>
          <div className=" mt-10 flex gap-5">
            <div onClick={()=>setColor("#000")} className={`h-[2vw] w-[2vw] rounded-full bg-zinc-800 ${interact ? "pointer-events-auto" : "pointer-events-none"} cursor-pointer`}></div>
            <div onClick={()=>setColor("#282801")} className={`h-[2vw] w-[2vw] rounded-full bg-[#282801] ${interact ? "pointer-events-auto" : "pointer-events-none"} cursor-pointer`}></div>
            <div onClick={()=>setColor("#081431")} className={`h-[2vw] w-[2vw] rounded-full bg-[#081431] ${interact ? "pointer-events-auto" : "pointer-events-none"} cursor-pointer`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
