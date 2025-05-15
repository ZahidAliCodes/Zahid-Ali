// components/SkillCard.jsx
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { TbAlertTriangle } from "react-icons/tb";

const skills = [
  { icon: <FaPython size={40} />, name: "Python 2.x, 3.x", level: 90 },
  { icon: <FaReact size={40} />, name: "React", level: 75 },
  { icon: <TbAlertTriangle size={40} />, name: "Anomaly Detection", level: 75 },
  { icon: <FaDatabase size={40} />, name: "SQL, MongoDB", level: 85 },
];

const SkillCard = ({ icon, name, level }) => (
  <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative">
    <div className="flex items-center gap-4">
      <div className="text-lime-400">{icon}</div>
      <h2 className="text-gray-200 text-lg font-medium">{name}</h2>
      <div className="ml-auto bg-transparent border border-gray-600 text-sm text-gray-300 px-3 py-1 rounded-full">
        {level}%
      </div>
    </div>
    <div className="mt-6 bg-gray-700 h-1.5 rounded-full overflow-hidden">
      <div
        className="bg-white h-full rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 max-w-4xl mx-auto">
      {skills.map((skill, idx) => (
        <SkillCard key={idx} {...skill} />
      ))}
    </div>
  );
}
