/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import regeneratorRuntime from 'regenerator-runtime';
import React from 'react';
import {
  render, fireEvent, screen, queryByAttribute,
} from '@testing-library/react';
import App from './App.jsx';

const getById = queryByAttribute.bind(null, 'id');

const dom = render(<App />);

test('should update the week display', async () => {
  const next = getById(dom.container, 'right');
  fireEvent.click(next);
  const week = await '1/10/2021';
  expect(screen.getByTestId(week)).toBeTruthy();
});
