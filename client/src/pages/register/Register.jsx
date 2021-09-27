import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const registerSubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/users', {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (response.data) {
        toast.success('Sucessfully registered. Please login to continue');
        window.location.replace('/login');
      }
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={registerSubmitHandler}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          ref={usernameRef}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          ref={emailRef}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
