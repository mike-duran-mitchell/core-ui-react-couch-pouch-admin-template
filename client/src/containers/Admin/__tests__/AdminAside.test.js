import React from 'react';
import ReactDOM from 'react-dom';
import AdminAside from '../AdminAside';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminAside />, div);
  ReactDOM.unmountComponentAtNode(div);
});
