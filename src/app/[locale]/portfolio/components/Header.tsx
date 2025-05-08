import React from "react";

import katta from "../pictures/katta.svg";
import urta from "../pictures/urta.svg";
import mayda from "../pictures/mayda.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import hover from "../../../../../public/pictures/hover.svg";
const Header = () => {
  const t = useTranslations();
  return (
    <div className="text-white container md:h-[760px]  md:flex items-center justify-between gap-10 ">
      <div className="card ">
        <h2 className="font-bold text-[28px] md:text-[3rem] text-start leading-tight">
          {t("Tajribamiz davomida")}
          <span className="block font-normal">{t("turli xil hajmdagi")}</span>
          <span className="block text-[var(--violet)]">
            {t("IT loyihalarini")}{" "}
          </span>
          {t("ishga tushira oldik")}
        </h2>
      </div>
      <div className="card flex items-center mt-4 scale-80 md:scale-100   gap-15 justify-center md:h-[651px] md:w-[50%] relative">
        <div className="flex flex-col gap-26">
          <Image className="rounded-[10px]" src={mayda} alt="main_image" width={86} height={95} />
          <Image src={katta} alt="main_image" width={134} height={136} />
        </div>
        <div className="flex items-center mb-25   pb-20 justify-center">
          <Image  src={urta} alt="main_image" width={208} height={214} />
        </div>
        <Image
          src={hover}
          alt="Hover Background"
          className="absolute w-[110%]  md:w-full -z-10 top-[-20px]"
        />
      </div>
    </div>
  );
};

export default Header;
