import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Main from './components/Main';
import BookingForm from './components/BookingForm';

test('Form inputs can be changed', () => {
  render(<Main />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeButtons = screen.getAllByRole('button', { name: /(\d{2}:\d{2})/ });
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');

  // Test date input
  fireEvent.change(dateInput, { target: { value: '2023-05-01' } });
  expect(dateInput.value).toBe('2023-05-01');

  // Test time select
  userEvent.click(timeButtons[0]);
  expect(timeButtons[0]).toHaveStyle({ backgroundColor: '#f4ce14', color: 'black' });

  // Test guests input
  fireEvent.change(guestsInput, { target: { value: '3' } });
  expect(guestsInput.value).toBe('3');

  // Test occasion select
  userEvent.selectOptions(occasionSelect, 'Anniversary');
  expect(occasionSelect.value).toBe('Anniversary');
});

test('Booking confirmation shows the correct data from the form', async () => {
  render(<Main />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeButtons = screen.getAllByRole('button', { name: /(\d{2}:\d{2})/ });
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });

  fireEvent.change(dateInput, { target: { value: '2023-05-01' } });
  userEvent.click(timeButtons[0]);
  fireEvent.change(guestsInput, { target: { value: '3' } });
  userEvent.selectOptions(occasionSelect, 'Anniversary');

  // Mock successful API call
  jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      }),
  );
  test('disables submit button when form is invalid', () => {
    const formData = {
      date: '',
      time: '',
      guests: 0,
      occasion: '',
    };
    const onFormChange = jest.fn();
    const submitForm = jest.fn();

    render(
        <BookingForm formData={formData} onFormChange={onFormChange} submitForm={submitForm} />
    );

    const submitButton = screen.getByDisplayValue('Make Your reservation');
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when form is valid', async () => {
    const formData = {
      date: '2023-05-01',
      time: '18:00',
      guests: 2,
      occasion: 'Birthday',
    };
    const onFormChange = jest.fn();
    const submitForm = jest.fn();

    render(
        <BookingForm formData={formData} onFormChange={onFormChange} submitForm={submitForm} />
    );

    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: '2023-05-01' },
    });
    fireEvent.click(screen.getByText('18:00'));
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Birthday' },
    });

    const submitButton = screen.getByDisplayValue('Make Your reservation');
    expect(submitButton).not.toBeDisabled();
  });

  userEvent.click(submitButton);

  // Wait for the booking confirmation to appear
  const confirmationHeading = await screen.findByText('Reservation Confirmed');
  expect(confirmationHeading).toBeInTheDocument();

  const reservationDetails = await screen.findByText(
      "We'll see you soon! We got your reservation for 2023-05-01 at 18:00 for 3 guests",
  );
  expect(reservationDetails).toBeInTheDocument();

  // Clean up
  global.fetch.mockRestore();
});
