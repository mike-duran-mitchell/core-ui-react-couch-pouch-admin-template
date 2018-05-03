import React from 'react';
import ReactDOM from 'react-dom';
import UserFooter from '../UserFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
