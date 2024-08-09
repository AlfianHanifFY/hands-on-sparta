/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import CssGrid from "@/components/MainGrid";
import MainGrid from "@/components/MainGrid";
import SkillGrid from "@/components/SkillGrid";

export default function Home() {
  return (
    <div className="p-10 bg-slate-100">
      <MainGrid />
      <SkillGrid />
    </div>
  );
}
