import React, { useState } from 'react';
 

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let emailError = '';
    let passwordError = '';

    if (!email.includes('@')) emailError = 'Invalid email';
    if (password.length < 6) passwordError = 'Password too short';

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {errors.email && <p>{errors.email}</p>}

      <br />
      <br />
      
      <label>
        Password
        <input
          aria-label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errors.password && <p>{errors.password}</p>}


      <br /><br />

      <button type="submit" disabled={!email || !password}>
        Submit
      </button>

      {submitted && <p>Signup Successful!</p>}
    </form>
  );
};


export default SignupForm