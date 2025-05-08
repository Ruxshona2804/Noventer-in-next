import React from "react";
import icon1 from '../public/pictures/frame_pictures/icon1.svg';
import icon2 from '../public/pictures/frame_pictures/icon2.svg';
import icon3 from '../public/pictures/frame_pictures/icon3.svg';
import icon4 from '../public/pictures/frame_pictures/icon4.svg';
import icon5 from '../public/pictures/frame_pictures/icon5.svg';
import icon6 from '../public/pictures/frame_pictures/icon6.svg';
import icon7 from '../public/pictures/frame_pictures/icon.svg';
import icon8 from '../public/pictures/frame_pictures/icon8.svg';
import icon9 from '../public/pictures/frame_pictures/icon9.svg';
import { useTranslations } from "next-intl";

// Tip uchun agar kerak bo‘lsa
type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  {
    title: "Landing sahifalar",
    desc: "G'oya, tashviqot va mahsulot sahifalari, mijozlarni jalb qilish uchun",
    img: icon1.src,
  },
  {
    title: "Korporativ web-sayt",
    desc: "Kompaniyangiz uchun mustahkam tashrif sahifasi, mijozlar bilan aloqani osonlashtirish uchun",
    img: icon2.src,
  },
  {
    title: "Online do'kon",
    desc: "Mahsulotlar yoki xizmatlarni online tarzda sotish tizimi",
    img: icon3.src,
  },
  {
    title: "CRM tizimi",
    desc: "Mijozlar bilan ishlashni avtomatlashtirish va biznesingizni rivojlantirish",
    img: icon4.src,
  },
  {
    title: "Portfolio saytlar",
    desc: "Shaxsiy yoki kompaniya uchun imidj saytlar",
    img: icon5.src,
  },
  {
    title: "Blog sahifalari",
    desc: "Maqolalar, yangiliklar, interaktiv kontent joylash uchun",
    img: icon6.src,
  },
  {
    title: "Ta'lim platformasi",
    desc: "Ta'lim kurslari",
    img: icon7.src,
  },
  {
    title: "ERP platformasi",
    desc: "Ta'lim kurslari",
    img: icon8.src,
  },
  {
    title: "Alohida loyihami?",
    desc: "startap loyihalar",
    img: icon9.src,
  },
];

const Frame: React.FC = () => {
  const t = useTranslations()
  return (
    <div className="container mx-auto py-16 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">{t("Xizmat turlari")}</h2>
      <p className="text-center mb-12 text-gray-300">{t("Dasturiy ta'minotning eng talabgir xizmat turlari")}</p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-[rgba(255,255,255,0.1)] rounded-xl shadow-lg text-center hover:bg-[var(--violet)] px-10 py-20 hover:bg-opacity-80 hover:scale-105 transition"
          >
            <img src={service.img} alt={service.title} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">{t(service.title)}</h3>
            <p className="text-gray-300 mt-2">{t(service.desc)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame;

