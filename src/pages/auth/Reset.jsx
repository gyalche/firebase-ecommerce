import React, { useState } from 'react';
import styles from './auth.module.scss';
import restImg from '../../assets/forgot.png';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
const Reset = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //reset password;
  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success('check your email for a rest link');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
        // ..
      });
  };
  return (
    <section className={`container ${styles.auth}`}>
      {isLoading && <Loader />}

      <div className={styles.img}>
        <img src={restImg} alt="reset" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2 style={{ color: '#ff7722' }}>Reset Password</h2>

          <form onSubmit={resetPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
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
