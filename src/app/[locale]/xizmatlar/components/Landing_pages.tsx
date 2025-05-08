import React from "react";
import Image from "next/image";
import xizmatlar from "../xizmatlar_pictures/xizmatlar.png";
import list from "../xizmatlar_pictures/svg_icons/list.svg";
import bag from "../xizmatlar_pictures/svg_icons/bag.svg";
import crm from "../xizmatlar_pictures/svg_icons/crm.svg";
import process from "../xizmatlar_pictures/svg_icons/process.svg";
import shopping from "../xizmatlar_pictures/svg_icons/shopping.svg";
import shadow from "../xizmatlar_pictures/shadow.svg";
import { useTranslations } from "next-intl";

interface Feature {
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  features: Feature[];
  description: string;
  image: string;
  icon: string;
}

const services: ServiceData[] = [
  {
    title: "Landing",
    features: [
      {
        title: "Qisqa va ta'sirli",
        description:
          "Mijoz",
      },
      {
        title: "Maqsadli",
        description:
          "Aniq maqsad",
      },
      {
        title: "Tez yuklanuvchi",
        description:
          "Mijozlarning sabr-toqati",
      },
    ],
    description:
      "Texnik vazifa",
    image: xizmatlar.src,
    icon: list.src,
  },
  {
    title: "Katalog sahifalari",
    features: [
      {
        title: "Mahsulotlar tavsifi",
        description:
          "Har bir mahsulot",
      },
      {
        title: "Turli filtrlar",
        description:
          "Mijozlarning qidirishni osonlashtirish",
      },
      {
        title: "Navigatsiya",
        description:
          "Katalog",
      },
    ],
    description:
      "Texnik vazifa1",
    image: xizmatlar.src,
    icon: bag.src,
  },
  {
    title: "eCommerce Sahifalari",
    features: [
      {
        title: "Onlayn sotish",
        description:
          "Mijozlarga tovarlar",
      },
      {
        title: "Xavfsiz to'lov",
        description: "Turli xil xavfsiz to'lov",
      },
      {
        title: "Yetkazib berish",
        description:
          "Mijozlarga buyurtmalar",
      },
    ],
    description:
      "Texnik vazifa2",
    image: xizmatlar.src,
    icon: shopping.src,
  },
  {
    title: "CRM Sahifalari",
    features: [
      {
        title: "Mijozlar ma'lumotlari",
        description:
          "Mijozlar haqida",
      },
      {
        title: "Mijozlar bilan muloqot",
        description:
          "Mijozlar bilan samarali aloqa",
      },
      {
        title: "Tahlil",
        description:
          "Mijozlar haqida to'plangan ma'lumotlar",
      },
    ],
    description:
      "Texnik vazifa3",
    image: xizmatlar.src,
    icon: crm.src,
  },
  {
    title: "ERP sahifalari",
    features: [
      {
        title: "Butun Korxona Integratsiyasi",
        description:
          "Turli bo'limlar",
      },
      {
        title: "Avtomatlashtirish",
        description:
          "Ko'pgina jarayonlar",
      },
      {
        title: "Tahlil va xabarnoma",
        description:
          "Korxona faoliyati",
      },
    ],
    description:
      "Texnik vazifa4",
    image: xizmatlar.src,
    icon: process.src,
  },
  {
    title: "Landing",
    features: [
      {
        title: "Qisqa va ta'sirli",
        description:
          "Mijoz",
      },
      {
        title: "Maqsadli",
        description:
          "Aniq maqsad",
      },
      {
        title: "Tez yuklanuvchi",
        description:
          "Mijozlarning sabr-toqati",
      },
    ],
    description:
      "Texnik vazifa",
    image: xizmatlar.src,
    icon: list.src,
  },
  {
    title: "Landing",
    features: [
      {
        title: "Qisqa va ta'sirli",
        description:
          "Mijoz",
      },
      {
        title: "Maqsadli",
        description:
          "Aniq maqsad",
      },
      {
        title: "Tez yuklanuvchi",
        description:
          "Mijozlarning sabr-toqati",
      },
    ],
    description:
      "Texnik vazifa",
    image: xizmatlar.src,
    icon: list.src,
  },
  {
    title: "Landing",
    features: [
      {
        title: "Qisqa va ta'sirli",
        description:
          "Mijoz",
      },
      {
        title: "Maqsadli",
        description:
          "Aniq maqsad",
      },
      {
        title: "Tez yuklanuvchi",
        description:
          "Mijozlarning sabr-toqati",
      },
    ],
    description:
      "Texnik vazifa",
    image: xizmatlar.src,
    icon: list.src,
  },
 
];

const ServiceCard: React.FC<{ data: ServiceData }> = ({ data }) => {
  const t = useTranslations()
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mb-15  rounded-lg backdrop-blur-md transition duration-300 hover:backdrop-blur-lg bg-white/10 shadow-lg border-[rgba(255, 255, 255, 0.1)]">
      {/* IMAGE FIRST ON MOBILE */}
      <div className="order-1 md:order-2 w-full md:w-[40%] flex-shrink-0 md:flex md:items-start">
        <Image
          src={data.image}
          alt={data.title}
          width={540}
          height={700}
          className="rounded-tr-[5px] rounded-tl-[5px] md:rounded-tl-[0px] md:rounded-br-2xl w-full max-h-[330px] md:max-h-[600px] object-cover"
        />
      </div>

      {/* TEXT SECOND ON MOBILE */}
      <div className="order-2 md:order-1 text-white w-full md:w-[60%]  border-amber-50 px-5 md:px-10">
        <h2 className=" text-[36px] py-5 font-bold">{t(data.title)}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.features.map((feature, idx) => (
            <div key={idx} className="w-full max-w-[380px]">
              <h4 className="text-[24px] flex items-center gap-1 py-1 font-semibold">
                <div className="bg-white w-[20px] h-[20px] rounded-[6px]"></div>
                {t(feature.title)}
              </h4>
              <p className="text-[16px] pb-5 max-w-[280px]">
                {t(feature.description)}
              </p>
              <div className="relative">
                  <Image
                    src={shadow.src}
                    alt="icon"
                    width={580}
                    height={580}
                    className=" opacity-10 h-[580px] w-[580px] absolute  "
                  />
                </div>
            </div>
          ))}
        </div>

        <p className="text-[16px] sm:text-[18px] pb-6 mb-6 max-w-full">
          {t(data.description)}
        </p>

        <button className="border border-b-indigo-50 hover:bg-opacity-90 transition text-white mb-3 px-6 py-2 rounded-xl font-semibold backdrop-blur-md duration-300 hover:backdrop-blur-lg bg-white/10 shadow-lg border-[rgba(255, 255, 255, 0.1)]">
          {t("Buyurtma berish")}
        </button>

        <div className="relative">
          <Image
            src={data.icon}
            alt="icon"
            width={100}
            height={100}
            className="rounded-xl absolute right-2 sm:right-4 md:-right-12 md:-bottom-6 -bottom-1"
          />
        </div>
      </div>
    </div>
  );
};

const LandingPages: React.FC = () => {
  return (
    <div className="container  mx-auto   py-10">
      {services.map((service, index) => (
        <ServiceCard key={index} data={service} />
      ))}
    </div>
  );
};

export default LandingPages;
