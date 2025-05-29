import { BiCheckCircle, BiSolidError } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";

const RiskBar = ({ level }: { level: number }) => {
  const params = {
    icon:
      level < 30 ? (
        <BiCheckCircle />
      ) : level > 80 ? (
        <BiSolidError />
      ) : (
        <FaShieldAlt />
      ),
    color:
      level < 30 ? "bg-green-600" : level > 80 ? "bg-red-600" : "bg-primary",
    label: level < 30 ? "Safe" : level > 80 ? "Dangerous" : "Moderate",
  };

  return (
    <div className="space-y-3 py-5">
      {/* Header Text */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Risk Level</h3>
        <span
          className={`flex !${
            params.color
          }/20 items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium text-${params.color.slice(
            3
          )}`}
        >
          <span className="text-base">{params.icon}</span>
          {params.label}
        </span>
      </div>
      {/* Progress Bar */}
      <div className="relative bg-gray-300 p-2.5 rounded-2xl overflow-hidden">
        <div
          className={`absolute ${params.color} p-2.5 top-0 left-0 rounded-2xl transition-all duration-300`}
          style={{ width: `${level}%` }}
        ></div>
        <p
          className={`absolute left-[50%] ${
            level < 50 ? "text-gray-600" : "text-gray-200"
          } font-semibold right-[50%] top-0 z-10 text-sm`}
        >
          {level}%
        </p>
      </div>
    </div>
  );
};

export default RiskBar;
