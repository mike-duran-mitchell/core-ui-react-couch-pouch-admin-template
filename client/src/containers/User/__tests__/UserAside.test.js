import React from 'react';
import ReactDOM from 'react-dom';
import UserAside from '../UserAside';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserAside />, div);
  ReactDOM.unmountComponentAtNode(div);
});
