import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';
import { shows } from '../../data';

test('clicking a card calls onClick prop', () => {
  const show = shows[0];
  const onClick = jest.fn();
  const { getByText } = render(<Card show={show} onClick={onClick} />);
  getByText(show.title).click();
  expect(onClick).toHaveBeenCalledWith(show);
});
