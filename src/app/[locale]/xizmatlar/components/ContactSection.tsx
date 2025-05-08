import { useTranslations } from "next-intl";
import React from "react";

const ContactSection: React.FC = () => {
  const t = useTranslations();
  return (
    <div className="container mx-auto grid items-center justify-center  sm:px-6 py-10">
      {/* Header */}
      <div className="flex flex-col text-white items-center mb-10 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {t("Biz bilan aloqa")}
        </h3>
        <p className="text-gray-300 max-w-xl">
          {t(
            "Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz"
          )}
        </p>
      </div>

      {/* Main Content */}
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Team Section (Hidden on mobile) */}
        <div className=" hidden md:block md:col-span-2 bg-white/5 backdrop-blur rounded-2xl shadow-lg p-6">
          <h2 className="text-white text-2xl font-semibold mb-6">{t("Bizning jamoa haqida")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 p-3 rounded-xl hover:bg-white/20 transition"
              >
                <div className="w-[84px] h-[84px] bg-white rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-medium">Xusanov Alibek</h3>
                  <p className="text-gray-400 text-sm">Developer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Section */}
        <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-6">
          <h2 className="text-white text-2xl font-semibold mb-4">
            {t("Bepul konsultatsiya")}
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            {t("Loyihangiz")}
          </p>
          <input
            type="text"
            placeholder={t("Ismingiz")}
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="text"
            placeholder={t("Telefon raqamingiz")}
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-400 mb-6 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition">
            {t("Jo’natish")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

