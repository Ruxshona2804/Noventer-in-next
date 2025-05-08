import React from "react";
import { useTranslations } from "next-intl";
import hover from "../../../../../public/pictures/hover.svg";
import katta from "../xizmatlar_pictures/katta.svg";
import urta from "../xizmatlar_pictures/urta.svg";
import mayda from "../xizmatlar_pictures/mayda.svg";
import Image from "next/image";
const Main = () => {
  const t = useTranslations();
  return (
    <div className="container  mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="left  pb-20 mb-6 md:mb-0 w-full md:w-1/2">
          <h2 className="font-bold text-[27px] md:text-[3rem] text-start leading-tight text-white">
            {t("Har bir xizmat turini")}
            <span className="block font-normal">
              {t("har bir mijoz uchun")}
            </span>
            <span className="block text-[var(--violet)]">
              {t("alohida ahamiyatli")}
            </span>
            {t("deb yondoshamiz !")}
          </h2>
        </div>
        <div className="relative flex md:h-[760px] items-center justify-center gap-10  w-full md:w-1/2">
          <div className="flex flex-col gap-26">
            <Image
              className="rounded-[10px]"
              src={mayda}
              alt="main_image"
              width={86}
              height={95}
            />
            <Image src={katta} alt="main_image" width={134} height={136} />
          </div>
          <div className="flex items-center mb-25   pb-20 justify-center">
            <Image src={urta} alt="main_image" width={208} height={214} />
          </div>
          <Image
            src={hover}
            alt="Hover Background"
            className="absolute w-[110%]  md:w-full -z-10 top-[-20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
