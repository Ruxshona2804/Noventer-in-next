'use client';

import React, { ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LangSwitch: React.FC = () => {
  const path = usePathname(); // текущий путь, например "/uz/about"
  const router = useRouter();
  const currentLocale = useLocale();

  const switchHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Удаляем текущую локаль из начала пути
    const segments = path.split('/');
    segments[1] = newLocale; // заменяем локаль
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div>
      <select onChange={switchHandle} value={currentLocale}>
        <option value="en">English</option>
        <option value="uz">O‘zbek</option>
      </select>
    </div>
  );
};

export default LangSwitch;


