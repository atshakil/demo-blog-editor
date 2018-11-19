import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { en, vi, ja } from '../../locales';

const locales = { en, vi, ja };

const testWithIntl = (children, locale= 'en') =>
  renderer.create(
    <IntlProvider locale={locale} messages={locales[locale]}>
      {children}
    </IntlProvider>
  );

export default testWithIntl;
