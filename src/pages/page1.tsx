import * as React from 'react';
import { Link } from 'react-router-dom';

export const Page1 = () => {
  return (
    <div>
      <div>Page 1</div>
      <Link to="/page2">To Page 2</Link>
    </div>
  );
};
