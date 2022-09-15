import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css';

const Form = () => {
  const [isSubmitted,setIsSubmitted] = useState(false);
  
  const submitForm = ()=>{
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='form-container'>
      <div className='form-content-left'>
        <img src='img/react-js-icon.svg' alt="react-logo" className='form-img-2'/>
      </div>
      {!isSubmitted ? (<FormSignup submitForm={submitForm} />):
    (<FormSuccess />)}
    </div>
   
    </>
    

  )
}

export default Form