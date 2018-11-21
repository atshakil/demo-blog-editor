import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { testWithIntl } from '../../../services/test';
import PhotoUploader from '.';

it('renders without crashing', () => {
  const component = testWithIntl(<PhotoUploader />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
