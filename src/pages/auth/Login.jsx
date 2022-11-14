import React, { useState } from 'react';
import styles from './auth.module.scss';
import loginImg from '../../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../../components/card/Card';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success('Sucessfully logged in');
        navigate('/');
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <section className={`container ${styles.auth}`}>
      <ToastContainer />
      {isLoading && <Loader />}
      <div className={styles.img}>
        <img src={loginImg} alt="loginImg" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2 style={{ color: '#ff7722' }}>Login</h2>

          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
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
