import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import styles from './auth.module.scss';
import registerImg from '../../assets/register.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const register = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error('Password doesnt match');
      setIsLoading(false);
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success('Sucessfully registered');
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
        // ..
      });
  };
  return (
    <section className={`container ${styles.auth}`}>
      <ToastContainer />
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <h2 style={{ color: '#ff7722' }}>Register</h2>

          <form onSubmit={register}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              required
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

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
