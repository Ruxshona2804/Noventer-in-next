"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/svgPictures/logo.svg";
import { useTranslations } from "next-intl";
import LangSwitch from "../components/LangSwitch";

const Navbar: React.FC = () => {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="  text-white w-full z-50 relative">
      <div className="container  mx-auto py-5">
        <nav className="flex items-center justify-between">
          {/* Мобильная версия */}
          <div className="flex items-center justify-between w-full md:hidden">
            <LangSwitch />

            <Image src={logo} alt="Logo" width={120} height={40} />

            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Десктоп-меню */}
          <div className="hidden md:flex items-center justify-between w-full">
            <Image src={logo} alt="Logo" width={140} height={50} />

            <ul className="flex gap-10 text-base">
              <li>
                <Link href="/"> {t("Bosh sahifa")} </Link>
              </li>
              <li>
                <Link href="/portfolio">{t("Portfolio")}</Link>
              </li>
              <li>
                <Link href="/xizmatlar">{t("Xizmatlar")}</Link>
              </li>
              <li>
                <Link href="/">{t("Aloqa")}</Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <LangSwitch />
              <button className="px-4 py-2 border border-white rounded-lg bg-white/10 hover:bg-white/20 transition">
               {t("Loyiha bormi?")} 
              </button>
            </div>
          </div>
        </nav>

        {/* Мобильное меню */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-black rounded-lg p-6 flex flex-col items-center gap-4 shadow-lg">
            <ul className="flex flex-col items-center gap-5">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                {t("Bosh sahifa")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
                {t("Portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/xizmatlar" onClick={() => setMenuOpen(false)}>
                {t("Xizmatlar")}
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                {t("Aloqa")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
