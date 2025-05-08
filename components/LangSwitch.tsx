
import React, { ChangeEvent } from 'react';
import { usePathname, redirect } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const LangSwitch: React.FC = () => {
  const path = usePathname();
  const locale = useLocale();

  const switchHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    redirect({ locale: selectedLocale, href: path });
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
