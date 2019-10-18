import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});

test(`Fake Test`, () => {
  expect(true).toBeTruthy();
});

// test(`Fake Test`, () => {
//   expect(false).toBeFalsy();
// });
