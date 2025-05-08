import React from "react";
import main_image1 from "../public/pictures/main_image1.png";
import main_image2 from "../public/pictures/main_image2.png";
import main_image3 from "../public/pictures/main_image3.png";
import hover from "../public/pictures/hover.svg";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";


interface Card {
  img: StaticImageData;
  title: string;
  text: string;
}

const Main: React.FC = () => {
  const t = useTranslations();
  const cards: Card[] = [
    {
      img: main_image2,
      title: "Boshlanishi",
      text: "Biz",
    },
    {
      img: main_image3,
      title: "Uzoq muddatli loyihalar",
      text: "Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda ishlab topshirdik",
    },
    {
      img: main_image1,
      title: "Jamoamiz kengaymoqda",
      text: "Jamoamiz",
    },
  ];

  return (
    <section className=" text-white text-center">
      {/* Заголовок */}
      <div className="bg-[var(--violet)] py-7 mb-9 text-start  ">
        <h2 className=" container text-[48px] font-bold">{t("Biz haqimizda")}</h2>
        <p className="text-gray-300 text-[18px] container  text-start ">{t("Qisqacha ma'lumot")}</p>
      </div>

      {/* Карточки */}
      <div className="container grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.1)] rounded-xl text-start overflow-hidden shadow-lg relative"
          >
            <img
              className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]"
              src={hover}
              alt="hover"
            />
            <img
              src={card.img.src}
              alt={card.title}
              className="w-full h-[70%] object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{t(card.title)}</h3>
              <p className="text-gray-300 md:text-[14px] md:pb-2 pb-19 text-[12px]">
                {t(card.text)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Текст внизу */}
      <p className=" py-8  text-gray-300 text-sm text-[18px]  text-center md:text-start container mx-auto">
       {t("ma’lumotlar")} 
         <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </section>
  );
};

export default Main;

