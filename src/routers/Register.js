import React from 'react';
import './style.css';

const Register = () => {
  return (
    <div className='Registration_form_container'>

      <form action="">

        <h3>user Registration</h3>
        <input type="text" placeholder="Enter Full Name" class="box" />
        <input type="email" placeholder="Enter Email" class="box" />
        <input type="password" placeholder="Create Password" class="box" />
        <input type="number" placeholder="Enter Phone Number" class="box" />
        <input type="submit" value="Register now" class="btn" />
      </form>
    </div>
  )
}

export default Register;