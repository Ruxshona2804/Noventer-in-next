

import Image, { StaticImageData } from 'next/image';
import computer from '../public/pictures/computer.svg';
import tajriba from '../public/pictures/tajriba.svg';
import loyiha from '../public/pictures/loyiha.svg';
import hizmat from '../public/pictures/hizmat.svg';
import Havsizlik from '../public/pictures/Havsizlik.svg';
import hover from '../public/pictures/hover.svg';
import { useTranslations } from 'next-intl';
import React from 'react';

interface InfoCard {
  img: StaticImageData;
  title: string;
  text: string;
}

const Header: React.FC = () => {
  const t = useTranslations();

  const cards: InfoCard[] = [
    { img: tajriba, title: '7+ yillik', text: 'Umumiy tajriba' },
    { img: loyiha, title: '5+', text: 'Yirik loyihalar' },
    { img: hizmat, title: '8+', text: 'Xizmat turlari' },
    { img: Havsizlik, title: '100%', text: 'Xavfsizlik' },
  ];

  return (
    <section className="relative md:h-[800px]   h-[460px]  text-white    md:py-20 overflow-hidden">
      <div className="grid  grid-cols-1 container md:grid-cols-2 gap-8 items-center  relative">
        {/* Left text content */}
        <div className="space-y-6 pt-5">
          <h1 className="text-[27px]  md:text-[48px] font-bold leading-tight">
            {t('Yuqori sifatdagi')}
            <span className="block font-normal">{t('aniqlikka asoslanib')}</span>
            <span className="block text-[var(--violet)]">{t('istalgan turdagi')}</span>
            {t('dasturlarni tayyorlaymiz')}
          </h1>
          <button className="bg-[var(--violet)] text-white  md:py-4  md:px-8 py-2 px-4 rounded-[8px] text-[16px]">
            {t('Xizmatlar haqida')}
          </button>
        </div>

        {/* Right image */}
        <div className="relative  flex justify-center md:justify-end items-center">
          <Image
            src={hover}
            width={500}
            height={500}
            alt="Hover Background"
            className="absolute w-[110%]  md:w-full -z-10 top-[-20px]"
          />
          <Image
            src={computer}
            alt="Computer"
            width={417}
            height={270}
            priority={true}
            className="relative md:-left-50 left-3 bottom-23 md:-bottom-43 md:scale-220 md:w-full max-w-[500px]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className=" grid grid-cols-2 px-6 right-10 absolute container md:grid-cols-4 gap-2 md:gap-4 bottom-12   md:mt-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-1 md:gap-3 md:w-[270px] md:h-[120px] w-[134px] h-[59px]  p-2 md:p-6 bg-[rgba(255,255,255,0.1)] rounded-[8px]  shadow-md"
          >
            <Image src={card.img} alt={t(card.title)} width={33}  height={33}
            className='md:w-[68px] md:h-[68px] w-[33px] h-[33px] border'  />
            <div className="text-left">
              <p className="text-[10px] md:text-[24px] md:text-xl font-bold">{t(card.title)}</p>
              <p className="text-[8px] md:text-[18px] ">{t(card.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
