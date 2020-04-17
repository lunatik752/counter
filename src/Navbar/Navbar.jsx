import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.item}>
        <NavLink to='/counter1' activeClassName={style.active}>Counter 1</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/counter2' activeClassName={style.active}>Counter 2</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
