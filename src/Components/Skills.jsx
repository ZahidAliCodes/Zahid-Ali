import React from 'react';
import SkillsOverview from './SkillsOverview';

const skills = [
  { icon: 'fab fa-html5', name: 'HTML5', level: 95 },
  { icon: 'fab fa-css3-alt', name: 'CSS3', level: 90 },
  { icon: 'fab fa-js', name: 'JavaScript', level: 85 },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap', level: 85 },
  { icon: 'fas fa-wind', name: 'Tailwind CSS', level: 90 },
  { icon: 'fab fa-react', name: 'React.js', level: 85 },
];

const tools = [
  { name: 'VS Code', percent: 90, icon: 'https://ryancv.bslthemes.com/ml-engineer/wp-content/uploads/sites/23/2025/04/visual-basic.png' },
  { name: 'Figma', percent: 90, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
  { name: 'Git & GitHub', percent: 85, icon: 'https://img.icons8.com/ios_filled/512/FAB005/git.png' },
  { name: 'Chrome DevTools', percent: 90, icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'Netlify', percent: 80, icon: 'https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png' },
  { name: 'Vercel', percent: 85, icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
  { name: 'npm', percent: 90, icon: 'https://cdn.freebiesupply.com/logos/large/2x/npm-2-logo-png-transparent.png' },
  { name: 'Canva', percent: 80, icon: 'https://freelogopng.com/images/all_img/1656733807canva-icon-png.png' },
];

const SkillCard = ({ icon, name, level }) => (
  <div className="bg-[linear-gradient(120deg,_rgba(255,255,255,0.02),_rgba(0,0,0,0.2))] flex flex-col justify-between border border-[rgba(255,255,255,.1)] rounded-2xl h-[112px] pt-7.5 pl-7.5 pr-7.5 shadow-md hover:shadow-lg transition">
    <div className="flex items-center gap-4 relative pt-2">
      <i className={`${icon} text-secondary text-4xl`}></i>
      <h2 className="text-gray text-[16px] font-play font-medium">{name}</h2>
      <span className="ml-auto text-[12px] font-normal font-play absolute px-2 py-0.5 -top-5 rounded-4xl border-1 border-[#424242] -right-5 text-gray">{level}%</span>
    </div>
    <div className="w-full bg-[#2b2b2b] h-[3px] rounded-full overflow-hidden">
      <div className="bg-light2 h-full rounded-full" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const ToolCard = ({ percent, icon, name }) => {
  const radius = 45;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 bg-[rgba(255,255,255,0.02)] rounded-2xl border border-[rgba(255,255,255,0.08)] py-4 shadow-md hover:shadow-lg transition">
      <div className="relative">
        <svg height={100} width={100} className="-rotate-90">
          <circle
            stroke="#3f4149"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="50"
            cy="50"
          />
          <circle
            stroke="#77c642"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx="50"
            cy="50"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src={icon}
            alt={name}
            className="w-8 h-8 mb-1 object-contain"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <p className="text-sm text-light2 font-play font-medium">{percent}%</p>
        </div>
      </div>
      <p className="text-sm text-light2 font-play font-normal">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="xl:h-[75vh] overflow-y-auto overflow-x-hidden backdrop-blur-lg xl:p-10 px-3 rounded-3xl">
      {/* Skills Heading */}
      <div className="relative inline-block pb-6">
        <h1 className="text-[28px] text-light2 font-normal tracking-[1px] uppercase font-play2 relative z-10">
          <span className="text-secondary">S</span>kills
        </h1>
        <span
          className="absolute top-2.5 -left-3 w-[30px] h-[30px] rounded-full z-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(119, 198, 66, 0.5) 0%, rgba(119, 198, 66, 0.01) 100%)',
          }}
        ></span>
      </div>

      <div
        className="w-full h-[1.5px] mb-8"
        style={{
          background:
            'radial-gradient(ellipse at left, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      ></div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      {/* Tools Section */}
      <div className="flex items-center w-fit h-fit mt-20 mb-7 border border-[#333333] rounded-4xl text-white px-[14px] py-[8px] tracking-widest gap-2 text-[14px] font-light font-play">
        <i className="fa-light fa-gear-complex-code"></i>
        <span>Tools & Platforms</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7.5">
        {tools.map((tool, idx) => (
          <ToolCard key={idx} {...tool} />
        ))}
      </div>

      {/* Skills Overview Component */}
      <SkillsOverview />
    </div>
  );
};

export default Skills;
