import * as React from 'react';
import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <div>
      <div>Page 2</div>
      <Link to="/page3">To Page 3</Link>
    </div>
  );
};
