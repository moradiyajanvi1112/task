
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Register()
{
    return(
    <div className="register-container">
    <h2>Register</h2>

    <form>
      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label for="mobile">Mobile</label>
        <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
      </div>

      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
      </div>

      <div className="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
      </div>

      <div className="form-group gender-options">
        <label>Gender</label>
        <div>
          <label>
            <input type="radio" name="gender" value="male" required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" /> Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required/>
      </div>

      <div className="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>)
}


root.render(Register)