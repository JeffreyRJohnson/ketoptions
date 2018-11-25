import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1 className="header">Ketoptions</h1>
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
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
