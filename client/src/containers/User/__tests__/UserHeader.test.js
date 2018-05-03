import React from 'react';
import ReactDOM from 'react-dom';
import UserHeader from '../UserHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
