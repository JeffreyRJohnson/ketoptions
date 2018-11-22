import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="header">Ketoptions</h1>
    <NavLink
      to="/"
      activeClassName="is-active"
      exact={true}
      className="header__link"
    >
      Landing Page
    </NavLink>
    <NavLink
      to="/dashboard"
      activeClassName="is-active"
      className="header__link"
    >
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" className="header__link">
      Create
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active" className="header__link">
      Edit
    </NavLink>
    <NavLink to="/delete" activeClassName="is-active" className="header__link">
      Delete
    </NavLink>
  </header>
);

export default Header;
