import React from 'react';
import { ThemeToggle } from '../theme-toggle';
import { Logo } from './logo';
import { NavbarContainer } from './nav-bar-container';
import { Profile } from './profile';
import { SearchBar } from './search-bar';

export const Navbar = () => {
  return (
    <nav className="navbar bg-base-200">
      <NavbarContainer>
        <Logo />
        <div className="gap-2 flex">
          <SearchBar />
          <Profile />
          <ThemeToggle />
        </div>
      </NavbarContainer>
    </nav>
  );
};
