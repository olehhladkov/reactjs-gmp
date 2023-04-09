import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import GenreToggle from '../components/GenreToggle';
import reducer from '../app/appSlice';

describe('GenreToggle', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { app: reducer },
    });
  });

  it('renders correctly', async () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <GenreToggle />
        </Provider>
      </MemoryRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('handles click event', async () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <GenreToggle />
        </Provider>
      </MemoryRouter>
    );
    const button = container.querySelector('li:nth-child(2) button');
    const { textContent } = button;

    fireEvent.click(button);

    expect(store.getState().app.searchFields.genre).toEqual(textContent);
  });
});
