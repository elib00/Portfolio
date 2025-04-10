import React from 'react'
import TechCard from "./TechCard";

const TechSkillsSection = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* title */} 
      <div className="col-span-full text-center text-4xl font-semibold text-white">
        Technical Skills
      </div>

        {/* tech skills images */}
      <div className="flex-1 w-full grid grid-cols-3 gap-4 rounded-xl border border-white/10 p-6 bg-[#111111]">
          <TechCard imageSource="/stack-icons/react-js-icon.svg" alt="React"/>
          <TechCard imageSource="/stack-icons/django-icon.svg" alt="Django" height={100} width={100}/>
          <TechCard imageSource="/stack-icons/nextjs-icon.svg" alt="Next.js"/>
          <TechCard imageSource="/stack-icons/google-firebase-icon.svg" alt="Firebase"/>
          <TechCard imageSource="/stack-icons/mysql-icon.svg" alt="MySQL" height={80} width={80} />
          <TechCard imageSource="/stack-icons/postgresql-icon.svg" alt="PostgreSQL"/>
          <TechCard imageSource="/stack-icons/python-icon.svg" alt="Python"/>
          <TechCard imageSource="/stack-icons/git-icon.svg" alt="Git"/>
          <TechCard imageSource="/stack-icons/tailwind-css-icon.svg" alt="Tailwind CSS"/>
        </div>

        {/* skills list */}
      <div className="flex-1 w-full flex flex-col justify-center text-white rounded-xl p-6 space-y-6 border border-white/10">
        <div>
          <span className="font-semibold text-blue-400">Frontend:</span>{' '}
          <span>HTML, Tailwind CSS, JavaScript, Typescript, React</span>
        </div>
        <div>
          <span className="font-semibold text-blue-400">Backend:</span>{' '}
          <span>Node.js, Express, Python, Django, ASP.NET Core</span>
        </div>
        <div>
          <span className="font-semibold text-blue-400">Databases:</span>{' '}
          <span>MySQL, PostgreSQL, SQL Server, MongoDB, Supabase</span>
        </div>
        <div>
          <span className="font-semibold text-blue-400">Tools & Platforms:</span>{' '}
          <span>Git, Docker</span>
        </div>
        <div>
          <span className="font-semibold text-blue-400">Others:</span>{' '}
          <span>RESTful APIs</span>
        </div>
      </div>
    </div>
  )
}

export default TechSkillsSection;
