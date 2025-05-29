import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Img from "./Img";
import Link from "next/link";
import MetaInfo from "@/types/MetaInfo";

const Preview = ({ title, description, image, url }: MetaInfo) => {
  return (
    <div className="py-7 border-0 bg-white dark:bg-slate-800 flex flex-col lg:!flex-row items-center gap-y-5 gap-x-3 justify-between">
      <div className="w-full lg:w-2/5 max-w-xs">
        <Img
          src={image || "/placeholder.png"}
          className="rounded-lg"
          alt="Placeholder"
        />
      </div>
      <div className="lg:w-3/5 max-w-xl">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            {title || "No Title Available"}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-2">
            {description || "No description available..."}
          </p>
          <Link
            href={"#"}
            className="w-fit !hidden lg:!flex btn text-white rounded-sm mt-5"
          >
            <FaExternalLinkAlt /> View Website
          </Link>
        </div>
      </div>

      <Link
        href={url || "#"}
        target="_blank"
        rel="noreferrer noopener"
        className="lg:!hidden w-full btn max-w-xl rounded-xl text-white mt-5"
      >
        <FaExternalLinkAlt /> View Website
      </Link>
    </div>
  );
};

export default Preview;
