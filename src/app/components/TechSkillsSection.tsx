import React from 'react'
import Image from "next/image";

import TechCard from "./TechCard";

const TechSkillsSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* tech skills */}
        <div className="flex-1 grid grid-cols-3 gap-4 rounded-xl border border-white/10 p-6 bg-[#111111]">
            <TechCard imageSource="/stack-icons/react-js-icon.svg" alt="React"/>
            <TechCard imageSource="/stack-icons/django-icon.svg" alt="Django" height={120} width={120}/>
            <TechCard imageSource="/stack-icons/google-firebase-icon.svg" alt="Firebase"/>
            <TechCard imageSource="/stack-icons/mysql-icon.svg" alt="MySQL" height={100} width={100} />
            <TechCard imageSource="/stack-icons/postgresql-icon.svg" alt="PostgreSQL"/>
            <TechCard imageSource="/stack-icons/python-icon.svg" alt="Python"/>
            <TechCard imageSource="/stack-icons/git-icon.svg" alt="Git"/>
            <TechCard imageSource="/stack-icons/tailwind-css-icon.svg" alt="Tailwind CSS"/>
        </div>
        <div className="flex-1 flex flex-col justify-content text-white">
            <span>Frontend: HTML, CSS, JavaScript, React</span>
            <span>Backend: Node.js, Express, Django</span>
            <span>Database: MySQL, PostgreSQL</span>
            <span>Version Control: Git</span>
            <span>Cloud: Firebase</span>
            <span>CSS Frameworks: Tailwind CSS</span>
            <span>Other: REST APIs, GraphQL</span>
            <span>Tools: VS Code, Postman</span>
            <span>Deployment: Heroku, Vercel</span>
        </div>
    </div>
  )
}

export default TechSkillsSection;
