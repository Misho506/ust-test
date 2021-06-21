import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import Home from './Home';

test('renders Home componet', async () => {
  render(<Provider store={getNewStore()}><Home /></Provider>);
});
