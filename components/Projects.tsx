import React from "react";
import loyiha1 from "../public/pictures/loyiha1.png";
import loyiha2 from "../public/pictures/loyiha2.png";
import loyiha3 from "../public/pictures/loyiha3.png";
import hover from "../public/pictures/hover.svg";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
  const t =  useTranslations()
  return (
    <div className="text-white">
      <div className="mx-auto text-center mb-9">
        <h2 className="md:text-[48px] text-[32px] font-bold">{t("Loyihalarimiz")}</h2>
        <p className="md:text-[18px] text-[14px]">{t("biz haqimizda gapirsin!")}</p>
      </div>

      <div className="container mx-auto flex flex-col gap-10">
        {/* Project 1 */}
        <div className="projects flex flex-col md:flex-row items-center gap-5 md:gap-10 rounded-2xl relative">
          <div className="w-full md:w-[50%]">
            <img className="rounded-[16px] w-[360px] h-[340px] md:w-full" src={loyiha1.src as string} alt="loyiha" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
            <img
              className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]"
              src={hover.src as string}
              alt="hover"
            />
            <h3 className="font-bold text-[24px] md:mb-4 text-start">{t("Tourmad loyihasi")}</h3>
            <p className="md:text-[18px] text-[14px] text-start">
              {t("Tourmad")}
            </p>
            <button className="px-4 py-2 text-white border rounded-lg block bg-white/10 shadow-lg mt-5">
              {t("Loyihani ko’rish")}
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projects flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10 rounded-2xl relative">
          <img
            className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]"
            src={hover.src as string}
            alt="hover"
          />
          <div className="w-full md:w-[50%]">
            <img className="rounded-[16px] w-[360px] h-[340px] md:w-full" src={loyiha2.src as string} alt="loyiha" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h3 className="font-bold text-[24px] md:mb-4 text-start">{t("ProRun loyihasi")}</h3>
            <p className="md:text-[18px] text-[14px] text-start">
              {t("Prorun")}
            </p>
            <button className="px-4 py-2 text-white border rounded-lg block bg-white/10 shadow-lg mt-5">
            {t("Loyihani ko’rish")}
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="projects flex flex-col md:flex-row items-center gap-5 md:gap-10 rounded-2xl relative">
          <div className="w-full md:w-[50%]">
            <img className="rounded-[16px] w-[360px] h-[340px] md:w-full" src={loyiha3.src as string} alt="loyiha" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h3 className="font-bold text-[24px] md:mb-4 text-start">{t("Xalq trans loyihasi")}</h3>
            <p className="md:text-[18px] text-[14px] text-start">
              {t("ko’proq ma’lumotlar")}
            </p>
            <button className="px-4 py-2 text-white border rounded-lg block bg-white/10 shadow-lg mt-5">
            {t("Loyihani ko’rish")}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div>
        <button className="bg-[var(--violet)]  py-3 px-6 rounded-lg mt-10 block mx-auto">
          {t("Boshqa loyihalarni ko’rish")}
        </button>
      </div>
    </div>
  );
};

export default Projects;
