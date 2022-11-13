import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import styles from './auth.module.scss';
import registerImg from '../../assets/register.png';
const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2 style={{ color: '#ff7722' }}>Register</h2>

          <form>
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />

            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
            {/* <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div> */}
            {/* <p>-- or --</p> */}
          </form>
          {/* <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" style={{ marginRight: 10 }} /> Register With
            Google
          </button> */}

          <span className={styles.register}>
            <p>
              Already have an account ?{' '}
              <Link to="/login">
                <b>Login</b>
              </Link>
            </p>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="loginImg" width="400" />
      </div>
    </section>
  );
};

export default Register;
