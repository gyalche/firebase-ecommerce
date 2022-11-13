import React from 'react';
import styles from './auth.module.scss';
import restImg from '../../assets/forgot.png';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={restImg} alt="reset" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2 style={{ color: '#ff7722' }}>Reset Password</h2>

          <form>
            <input type="email" placeholder="Enter your email" required />
            {/* <input type="password" placeholder="Enter your password" required />
            <input
              type="password"
              placeholder="Confirm your password"
              required
            /> */}

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">-Login</Link>
              </p>
              <p>
                <Link to="/register">-Register</Link>
              </p>
            </div>
            {/* <p>-- or --</p> */}
          </form>
          {/* <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" style={{ marginRight: 10 }} /> Register With
            Google
          </button> */}

          {/* <span className={styles.register}>
            <p>
              Already have an account ?{' '}
              <Link to="/login">
                <b>Login</b>
              </Link>
            </p>
          </span> */}
        </div>
      </Card>
    </section>
  );
};

export default Reset;
