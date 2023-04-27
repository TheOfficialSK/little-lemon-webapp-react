import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Main from './Main';

test('Form inputs can be changed', () => {
  render(<Main />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');

  // Test date input
  fireEvent.change(dateInput, { target: { value: '2023-05-01' } });
  expect(dateInput.value).toBe('2023-05-01');

  // Test time select
  userEvent.selectOptions(timeSelect, '18:00');
  expect(timeSelect.value).toBe('18:00');

  // Test guests input
  fireEvent.change(guestsInput, { target: { value: '3' } });
  expect(guestsInput.value).toBe('3');

  // Test occasion select
  userEvent.selectOptions(occasionSelect, 'Anniversary');
  expect(occasionSelect.value).toBe('Anniversary');
});
