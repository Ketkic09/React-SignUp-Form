import React from 'react';
import useForm from './useForm';
import validationInfo from './validtaionInfo';
import './Form.css';
import './App.css';

const FormSignup = ({submitForm}) =>{
    const {handleChange,handleSubmit,values,errors} = useForm(submitForm,validationInfo);
    return(
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register yourself!</h1>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='username'>Username</label>
                    <input type="text" value={values.username}  onChange={handleChange} id='username' name="username"className="form-input" placeholder='enter your username'/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                
                <div className="form-inputs">
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input type="email"  id='email' name="email" value={values.email} onChange={handleChange} className="form-input" placeholder='enter your email'/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='password'>Password</label>
                    <input type="password" id='password' name="password" value={values.password} onChange={handleChange} className="form-input" placeholder='enter your password'/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label className='form-label' htmlFor='password2'>Confirm Password</label>
                    <input type="password" id='password2' name="password2" value={values.password2} onChange={handleChange} className="form-input" placeholder='confirm your password'/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type='submit' >Sign Up</button>
                <span className='form-input-login'>Already have an account?<a href='#'>&nbsp;login</a></span>
            </form>
        </div>
    );
}

export default FormSignup;