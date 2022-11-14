import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER } from '../../redux/slice/authSlice';

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>SHOP</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : ``);
const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState('');

  //dispatch;
  const dispatch = useDispatch();
  //show menu;
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //hide menu;
  const hideMenu = () => {
    setShowMenu(false);
  };

  //user logout;
  const logoutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success('user signout successfully');
        navigate('/login');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  //on auth state change;
  //monitor  currently sign in user;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setDisplayName(user.displayName);
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName('');
      }
    });
  }, []);
  return (
    <header>
      <ToastContainer />
      <div className={styles.header}>
        {logo}
        <nav>
          <div
            className={
              showMenu ? `${styles['show-nav']}` : `${styles['hide-menu']}`
            }>
            <div
              className={
                showMenu
                  ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                  : `${styles['nav-wrapper']}`
              }
              onClick={hideMenu}>
              {' '}
            </div>
            <ul onClick={hideMenu}>
              <li className={styles['logo-mobile']}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>

              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles['header-right']} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <a href="#">
                <FaUserCircle size={16} />
                Hi, {displayName}
              </a>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activeLink}>
                My Orders
              </NavLink>

              <NavLink to="/order-history" onClick={logoutUser}>
                Logout
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles['menu-icon']}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
