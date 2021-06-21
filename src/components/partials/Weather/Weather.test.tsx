import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import Weather from './Weather';

test('renders Weather componet', async () => {
  render(<Provider store={getNewStore()}><Weather /></Provider>);
  screen.getByText('Sun');
});
