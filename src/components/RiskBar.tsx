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
      level < 30
        ? "oklch(62.7% 0.194 149.214)"
        : level > 69
        ? "oklch(57.7% 0.245 27.325)"
        : "#532",
    label: level < 30 ? "Safe" : level > 69 ? "Dangerous" : "Moderate",
  };

  return (
    <div className="space-y-3 py-5">
      {/* Header Text */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Risk Level</h3>
        <span
          className={`flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium`}
          style={{ color: params.color }}
        >
          <span className="text-base">{params.icon}</span>
          {params.label}
        </span>
      </div>
      {/* Progress Bar */}
      <div className="relative bg-gray-300 p-2.5 rounded-2xl overflow-hidden">
        <div
          className={`absolute ${params.color} p-2.5 top-0 left-0 rounded-2xl transition-all duration-300`}
          style={{ width: `${level}%`, backgroundColor: params.color }}
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
