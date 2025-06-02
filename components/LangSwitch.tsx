'use client';

import React, { ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LangSwitch: React.FC = () => {
  const path = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.push(`/${selectedLocale}${path}`);
  };

  return (
    <div>
      <select onChange={switchHandle} value={locale}>
        <option value="en">En</option>
        <option value="uz">Uz</option>
      </select>
    </div>
  );
};

export default LangSwitch;

