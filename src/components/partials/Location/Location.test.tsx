import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import Location from './Location';

test('renders Weather componet', async () => {
  render(<Provider store={getNewStore()}><Location /></Provider>);
  screen.getByText('Sun');
});
