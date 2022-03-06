import React from 'react';
import './style.css';

const Login = () => {
  return (
    <div className="login_form_container">

        <form action="">

            <h3>user login</h3>
            <input type="email" placeholder="email" class="box"/>
            <input type="password" placeholder="password" class="box"/>
            <p>forget your password <a href=" ">click here</a></p>
            <input type="submit" value="login now" class="btn"/>
            <p>or login with</p>
            <div class="buttons">
                <a href=" " class="btn">google</a>
                <a href=" " class="btn">facebook</a>
            </div>
            <p>don't have an account <a href=" ">create one</a></p>
        </form>
    </div>
  )
}

export default Login;