import Image from "next/image";
import { Code } from "lucide-react";
import { FaReact } from "react-icons/fa"; // React icon
import { SiNextdotjs } from "react-icons/si"; // Next.js icon
import { SiDjango } from "react-icons/si"; // Django icon
import { LuCalendar, LuComputer, LuSmile, LuAward } from "react-icons/lu"; // From Lucide

import TechSkillsSection from "./components/TechSkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col h-auto items-center justify-center gap-y-3">
      {/* first section */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-center text-white bg-black gap-4 rounded-lg">
        {/* profile picture side */}
        <div className="flex-1 h-full w-full flex justify-center items-center p-4 box-border bg-gradient-to-br from-black to-[#1f642e] via-[#053a35] rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
          {/* wrapper for placing the icon relatively*/}
          <div className="relative flex items-center justify-center">
            <div className="rounded-full overflow-hidden border-2 border-gray-300 bg-black flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Profile"
                // fill
                width={280}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>

            {/* code icon */}
            <div className="h-18 w-18 absolute bottom-2 right-2 bg-green-900 text-white p-2 rounded-full shadow z-10 flex items-center justify-center">
                  <Code size={40} strokeWidth={2.5}/>
            </div>
          </div>
        </div>
        {/* text side */}
        <div className="flex-1 h-full flex flex-col justify-center items-start p-4 box-border gap-2 rounded-b-lg">
          <h6> <span className="text-[#845d61]">&lt;span&gt;</span> Hi, I'm Joshua <span className="text-[#845d61]">&lt;/span&gt;</span></h6>
          <h1 className="text-4xl">Aspiring <span className="text-[#0a7452]">&#123;Full Stack&#125; </span></h1>
          <h1 className="text-4xl">Web & Mobile Developer</h1>
          <p>
            <span className="text-[#845d61]">&lt;p&gt;</span>
            &nbsp;I am a passionate application developer with a knack for creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills.&nbsp;
            <span className="text-[#845d61]">&lt;/p&gt;</span>
          </p>
        </div>
      </div>

      {/* second section */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-white bg-black rounded-lg p-6">
        <div className="flex flex-col justify-between items-center p-4 gap-y-1">
          <LuCalendar className="w-6 h-6 text-emerald-600"/>
          <h3 className="text-xl">
            3+
          </h3>
          <small className="text-sm text-center">Years of Programming Experience</small>
        </div>

        <div className="flex flex-col justify-between items-center p-4 gap-y-1">
          <LuComputer className="w-6 h-6 text-emerald-600"/>
          <h3 className="text-xl">
            150+
          </h3>
          <small className="text-sm text-center">Projects Completed</small>
        </div>

        <div className="flex flex-col justify-between items-center p-4 gap-y-1">
          <LuSmile className="w-6 h-6 text-emerald-600"/>
          <h3 className="text-xl">
            3
          </h3>
          <small className="text-sm text-center">Satisfied Clients</small>
        </div>

        <div className="flex flex-col justify-between items-center p-4 gap-y-1">
          <LuAward className="w-6 h-6 text-emerald-600"/>
          <h3 className="text-xl">
            550+
          </h3>
          <small className="text-sm text-center">LeetCode Problems Solved</small>
        </div>
      </div>

      {/* third section */}
      <TechSkillsSection />
    </div>
  );
}
