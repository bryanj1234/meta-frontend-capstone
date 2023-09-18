import { render, screen } from '@testing-library/react';
import {Main} from './components/Main';
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

})