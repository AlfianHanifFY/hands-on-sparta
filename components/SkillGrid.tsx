import { data } from "@/app/skill-data";
import { url } from "inspector";
import React from "react";
import Image from "next/image";

const SkillGrid = () => {
  const boxStyle =
    "border-2 rounded-xl p-6 flex flex-col hover:bg-amber-200 hover:scale-105 shadow-xl bg-white overflow-hidden ";

  return (
    <div className="grid md:grid-cols-8 rows-[100px] gap-2 my-2">
      {data.map((item, i) => (
        <div
          key={i}
          className={`grid   ${
            i === 0 || i === 1 || i === 2 || i === 3
              ? "md:grid-cols-2 md:col-span-2 "
              : ""
          } ${boxStyle}`}
        >
          <div>
            <h2 className={item.headComp}>{item.head}</h2>
            <p className={item.p1Comp}>{item.p1}</p>
            <p className={item.p2Comp}>{item.p2}</p>
            <p className={item.p3Comp}>{item.p3}</p>
            <p className={item.p4Comp}>{item.p4}</p>
          </div>
          <div
            className={`${
              i === 0 || i === 1 || i === 2 || i === 3 ? "ml-10 mt-4 " : ""
            }object-center  `}
          >
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={"foto"}
              className={`rounded-lg object-center ${item.imageComp}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillGrid;
