import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import lg_logo from '../assets/lg_logo.png';

type Props = {}

const SignUp : React.FC<Props> = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/login');
  };

  const handleSignUpRedirect = () => {
    navigate('/login');
  };


  return (
    <div className='signup'>
      <div className='signup-background'></div>
      
      <img className='lg-logo' src={lg_logo} alt="LG logo" />
      <h1 className='signup-header'>Sign Up</h1>
      
      <input type="text" placeholder="Username" className='input-field' />
      <input type="email" placeholder="Email" className='input-field' />
      <input type="password" placeholder="Password" className='input-field' />
      <input type="password" placeholder="Confirm Password" className='input-field' />

      <button className='signup-button' onClick={handleSignup}>Sign Up</button>

      <div className='existing-account-text'>
        Already have an account? <span className='login-link' onClick={handleSignUpRedirect}>Login</span>
      </div>
    </div>
  );
}

export default SignUp;
