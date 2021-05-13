import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './view/Home';
import About from './view/About';
import Hours from './view/Hours';

test('renders welcoming message in home page', () => {
  const { getByTestId } = render(<Home />);
  const welcomeMsg = getByTestId('welcome');
  expect(welcomeMsg).toHaveTextContent('Welcome to working out smarter');
});

test('renders about info in about page', () => {
  const { getByTestId } = render(<About />);
  const aboutMsg = getByTestId('about');
  expect(aboutMsg).toHaveTextContent('About us');
});

test('renders hour info in hours page', () => {
  const { getByTestId } = render(<Hours />);
  const hourMsg = getByTestId('hours');
  expect(hourMsg).toHaveTextContent('Hours');
});

