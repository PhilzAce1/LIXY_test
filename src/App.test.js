import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Akuagwu Philemon's Test/i);
  expect(h1Element).toBeInTheDocument();
});
