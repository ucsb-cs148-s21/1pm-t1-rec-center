import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

test("should render the correct NavBar", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const Element = getByTestId('navbar');
    expect(Element).toBeInTheDocument();
  });

  test("should render Home link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const homeLink = getByText(/Home/);
    expect(homeLink).toBeInTheDocument();
  });

  test("should render About link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const aboutLink = getByText(/About/);
    expect(aboutLink).toBeInTheDocument();
  });

test("should render Activity link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const activityLink = getByText(/Activity/);
    expect(activityLink).toBeInTheDocument();
  });

  test("should render Hours link", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const hoursLink = getByText(/Hours/);
    expect(hoursLink).toBeInTheDocument();
  });
  
  test("should have the correct Home link in the navbar", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const HomeInfoLink = getByText(/Home/);
    expect(HomeInfoLink.href).toMatch('/');
  });

  test("should have the correct About link in the navbar", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const AboutInfoLink = getByText(/About/);
    expect(AboutInfoLink.href).toMatch('/about');
  });

  test("should have the correct Activity link in the navbar", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const ActivityInfoLink = getByText(/Activity/);
    expect(ActivityInfoLink.href).toMatch('/activity');
  });

  test("should have the correct Hours link in the navbar", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const HoursInfoLink = getByText(/Hours/);
    expect(HoursInfoLink.href).toMatch('/hours');
  });