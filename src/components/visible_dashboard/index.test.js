import React from 'react';
import { testWithIntl } from '../../services/test';
import VisibleDashboard from '.';

it('renders without crashing', () => {
  const component = testWithIntl(<VisibleDashboard />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
