import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

import en from '../i18n/massages/en.json';
import uz from '../i18n/massages/uz.json';

const messagesMap = {
  en,
  uz,
};

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messagesMap[locale] || messagesMap[routing.defaultLocale],
  };
});
