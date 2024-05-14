import React from 'react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react";
import AppFC from './AppFC';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFC />, div);
  ReactDOM.unmountComponentAtNode(div);
  // render(<AppFC />);

});

const server = setupServer(
  http.get(`http://localhost:5000/api/players`, () => {
    return HttpResponse.json([
      {
        "name": "Alex Morgan",
        "country": "United States",
        "searches": 100,
        "id": 0
      },
      {
        "name": "Megan Rapinoe",
        "country": "United States",
        "searches": 99,
        "id": 1
      },
      {
        "name": "Marta",
        "country": "Brazil",
        "searches": 18,
        "id": 2
      },])
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("Checking for component functionality", async () => {
  render(<AppFC />);
  await screen.findByText(/alex morgan/i)
})
