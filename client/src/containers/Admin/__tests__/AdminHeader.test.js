import React from 'react';
import ReactDOM from 'react-dom';
import AdminHeader from '../AdminHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
