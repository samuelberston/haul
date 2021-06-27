import regeneratorRuntime from 'regenerator-runtime';
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';

import WorkHours from './WorkHours.jsx';
import Totals from './Totals.jsx';
import ComplianceCheck from './ComplianceCheck.jsx';

test('should display work hours on click', async () => {
  render(<WorkHours start="2021-01-03T19:59:01.000Z" end="2021-01-02T13:05:00.000Z" />);
  const button = screen.getByTestId('button');
  fireEvent.click(button);
  const hoursInfo = await screen.getByTestId('hoursInfo');
  expect(hoursInfo).toBeTruthy();
});

test('should display totals on click', async () => {
  render(<Totals hours={151.8} pay={6.9} />);
  const button = screen.getByTestId('button');
  fireEvent.click(button);
  const totalsInfo = await screen.getByTestId('totalsInfo');
  expect(totalsInfo).toBeTruthy();
});

test('should display the compliance hours on hover -- compliant', async () => {
  render(<ComplianceCheck hours={21.7} />);
  const icon = screen.getByTestId('icon');
  fireEvent.mouseOver(icon);
  const modal = await screen.getByTestId('modal');
  expect(modal).toBeTruthy();
});

test('should display the compliance hours on hover -- non-compliant', async () => {
  render(<ComplianceCheck hours={60} />);
  const icon = screen.getByTestId('icon');
  fireEvent.mouseOver(icon);
  const modal = await screen.getByTestId('modal');
  expect(modal).toBeTruthy();
});
