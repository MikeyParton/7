import React from 'react';
import { render, queryByText, getByTestId } from '@testing-library/react';
import App from './App';

test('opening & closing sidebar', () => {
  const { container } = render(<App />);
  const showList = getByTestId(container, 'showList');
  const sidebar = getByTestId(container, 'sidebar');

  // Begins closed
  expect(sidebar).toHaveStyle('left: -100%');
  
  // Clicking a show from the list opens it
  queryByText(showList, 'Gold Digger')?.click();
  expect(sidebar).toHaveStyle('left: 0');

  // Clicking a show from the list opens it
  queryByText(showList, 'Smallville')?.click();
  expect(sidebar).toHaveStyle('left: 0');

  // Clicking the show in the sidebar closes it
  queryByText(sidebar, 'Smallville')?.click();
  expect(sidebar).toHaveStyle('left: -100%');
});
