import { fireEvent, render, screen } from '@testing-library/react';
import {updateTimes, initializeTimes, Main} from './components/Main';
import {MemoryRouter} from 'react-router-dom';

test('Renders the BookingForm heading', () => {

  console.log("TESTING...");

  render(
    <MemoryRouter initialEntries={['/Reservations']}>
      <Main></Main>
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Plan your dining experience");
  expect(headingElement).toBeInTheDocument();

  // const dateInput = screen.getByLabelText("Choose date");
  // expect(dateInput).toBeInTheDocument();
  // fireEvent.change(dateInput, { target: { value: '2024-01-01' } });

  // expect(updateTimes).toHaveBeenCalledWith({
  //   score,
  //   comment: ""
  // });

  const timesList = initializeTimes();
  expect(timesList).toEqual([
    "",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  console.log(timesList);

});