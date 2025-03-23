import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        DevTinder
      </Link>
    </div>
  );
};
