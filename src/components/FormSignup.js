import React from 'react';
import validate from '../validate/validateInfo';
import useForm from '../hook/useForm';
import '../css/Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h2 className="main1">
          Welcome to HashX
        </h2>
        <br />
        <h2 className= "main2">
          Ready to supercharge your business?      
        </h2>
        <h2 className= "main2">
        Sign up now!
        </h2>
        <br />
        <div className='form-inputs'>
          <label className='form-label'>Fullname</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Full name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your Password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account?  <a href='#'>Signin</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
