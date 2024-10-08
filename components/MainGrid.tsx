import { data } from "@/app/main-data";
import React from "react";

const MainGrid = () => {
  const boxStyle =
    "border-2 rounded-xl p-6 flex flex-col hover:bg-amber-200 hover:scale-105 shadow-xl bg-white overflow-hidden  ";

  // mapping each item in data to make a box
  return (
    <div className="grid md:grid-cols-4 rows-[250px] gap-2 my-2">
      {data.map((item, i) => (
        <div
          key={i}
          className={` ${i === 4 ? "md:col-span-2 md:row-span-2" : ""} ${
            i === 0 ? "md:col-span-3 " : ""
          } ${i === 7 ? "md:col-span-4 h-[100px]" : ""} ${boxStyle}`}
        >
          <img className={item.srcComp} src={item.src}></img>
          <div>
            <h2 className={item.headComp}>{item.head}</h2>
            <p className={item.p1Comp}>{item.p1}</p>
            <p className={item.p2Comp}>{item.p2}</p>
            <p className={item.p3Comp}>{item.p3}</p>
            <p className={item.p4Comp}>{item.p4}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainGrid;
