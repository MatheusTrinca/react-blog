import React from 'react';
import { NavLink } from 'react-router-dom';
import './topBar.css';

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink activeClassName="active" className="link" exact to="/">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink activeClassName="active" className="link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink activeClassName="active" className="link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink activeClassName="active" className="link" to="/write">
              WRITE
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </NavLink>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink activeClassName="active" className="link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink activeClassName="active" className="link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
