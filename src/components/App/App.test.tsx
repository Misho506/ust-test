import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getNewStore } from 'store';
import App from './App';

test('renders learn react link', async () => {
  render(<Provider store={getNewStore()}><App /></Provider>);
});
