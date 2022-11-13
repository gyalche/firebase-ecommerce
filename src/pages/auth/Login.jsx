import React from 'react';
import styles from './auth.module.scss';
import loginImg from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../../components/card/Card';
const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="loginImg" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2 style={{ color: '#ff7722' }}>Login</h2>

          <form>
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" style={{ marginRight: 10 }} /> Login With
            Google
          </button>

          <span className={styles.register}>
            <p>
              Dont have an account ? <Link to="/register">Register</Link>
            </p>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
