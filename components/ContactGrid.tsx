import { data } from "@/app/contact-data";
import React from "react";

const ContactGrid = () => {
  const boxStyle =
    "border-2 rounded-xl p-6 flex flex-col hover:bg-amber-200 hover:scale-105 shadow-xl bg-white overflow-hidden ";

  // mapping each item in data to make a box
  return (
    <div className="grid md:grid-cols-8 rows-[250px] gap-2 my-2">
      {data.map((item, i) => (
        <div key={i} className={`${i === 0 ? "col-span-4 " : ""} ${boxStyle}`}>
          <div>
            <h2 className={item.headComp}>{item.head}</h2>
          </div>
          <a href={item.link}>
            <img className={item.imageComp} src={item.image}></img>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactGrid;
