import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="flex md:flex-row items-center">
        <div className=" box-border h-64 w-4/5 shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-white">
          <div className="box-content w-4/5 m-3 bg-white">
            <p className="font-mono font-bold tracking-wide animate-pulse line-clamp-5 text-7xl  ">
              Hallooo 👋
              <br />{" "}
            </p>
            <p className="font-mono tracking tracking-wide line-clamp-5 text-5xl ">
              Nama ku Alfian Hanif FY
            </p>
            <p className="font-mono tracking tracking-wide line-clamp-5 text-3xl">
              Teknik Informatika - Ganesha
            </p>
          </div>
        </div>

        <Image
          src="/photo.png"
          width={100}
          height={100}
          alt={"foto"}
          className="rounded-lg w-64 h-64 m-2 hover:scale-105"
          style={{ animationDuration: "10s" }}
        />
      </div>

      <div className="flex md:flex-row items-center">
        <div className=" box-border h-64 w-1/3 shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-white">
          <div className="box-content w-4/5 m-3 "></div>
        </div>
        <div className=" box-border h-64 w-1/3 shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-white">
          <div className="box-content w-4/5 m-3 "></div>
        </div>
        <div className=" box-border h-64 w-1/3 shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-white">
          <div className="box-content w-4/5 m-3 "></div>
        </div>
      </div>

      <div className="flex md:flex-row items-center">
        <div className=" box-border h-64 w-1/3 shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-white">
          <div className="box-content w-4/5 m-3 "></div>
        </div>
        <div className=" box-border h-64 w-2/3 shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-white ">
          <div className="box-content w-4/5 m-3 "></div>
        </div>
      </div>

      <div className="flex w-full">
        <div className=" box-border w-full shadow-lg p-4 m-2 rounded-lg hover:scale-105 shadow-xl bg-yellow-300 animate-pulse">
          <div className="box-content  m-3 ">
            <p className="font-mono font-bold text-4xl text-center ">
              ⚠️ BELUM RESPONSIF ⚠️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
