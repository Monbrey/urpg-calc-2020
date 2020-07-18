import { render } from '@testing-library/react';
import React from 'react';
import NewBattle from './NewBattle';

test('renders learn react link', () => {
  const { getByText } = render(<NewBattle />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
