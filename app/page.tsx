/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import CssGrid from "@/components/MainGrid";
import MainGrid from "@/components/MainGrid";
import SkillGrid from "@/components/SkillGrid";
import ContactGrid from "@/components/ContactGrid";

export default function Home() {
  return (
    <div className="px-24 pt-1 bg-slate-100">
      <div className="scale-95">
        <MainGrid />
        <SkillGrid />
        <ContactGrid />
      </div>
    </div>
  );
}
