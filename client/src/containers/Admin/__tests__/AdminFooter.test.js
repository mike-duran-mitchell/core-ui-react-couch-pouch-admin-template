import React from 'react';
import ReactDOM from 'react-dom';
import AdminFooter from '../AdminFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
