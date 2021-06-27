/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import regeneratorRuntime from 'regenerator-runtime';
import React from 'react';
import {
  render, fireEvent, screen, queryByAttribute,
} from '@testing-library/react';
import App from './App.jsx';

const getById = queryByAttribute.bind(null, 'id');

test('should update the week display with the next week', async () => {
  const dom = render(<App />);
  const next = getById(dom.container, 'right');
  fireEvent.click(next);
  const week = await '1/10/2021';
  expect(screen.getByTestId(week)).toBeTruthy();
});

test('should update the week display with the prev week', async () => {
  const dom = render(<App />);
  const prev = getById(dom.container, 'left');
  fireEvent.click(prev);
  const week = await '12/27/2020';
  expect(screen.getByTestId(week)).toBeTruthy();
});

test('should not update the week if it does not exist', async () => {
  const dom = render(<App />);
  const prev = getById(dom.container, 'left');
  fireEvent.click(prev);
  fireEvent.click(prev);
  const week = await '12/27/2020';
  expect(screen.getByTestId(week)).toBeTruthy();
});
