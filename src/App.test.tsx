import React from 'react';
import { render, screen } from '@testing-library/react';
import MemoApp from './MemoApp';

test('renders learn react link', () => {
  render(<MemoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
