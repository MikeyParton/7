import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './index';
import { shows } from '../../data';

test('clicking the card calls onClose prop', () => {
  const show = shows[0];
  const onClick = jest.fn();
  const { getByText } = render(<Sidebar open={true} show={show} onClose={onClick} />);
  getByText(show.title).click();
  expect(onClick).toHaveBeenCalledTimes(1);
});
