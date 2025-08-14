import React, { useState } from 'react';
import './SignIn.css';

/**
 * PUBLIC_INTERFACE
 * SignIn
 * A React component that renders the Sign In screen extracted from Figma assets.
 * Styles are locally scoped via a wrapper class to avoid leaking global rules.
 * 
 * Props:
 *  - onSignIn?: (creds: { email: string; password: string }) => void
 *    Optional callback to handle sign-in in a real app; by default, a demo alert is shown.
 * 
 * Returns:
 *  - JSX Element rendering the sign-in screen with form, social buttons, and related UI.
 */
function SignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo logic preserved from assets/app.js
    // In a real integration, replace alerts/logs with actual auth calls.
    // eslint-disable-next-line no-console
    console.log('Sign In attempt:', { email, passwordLength: password.length });

    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    if (!password) {
      alert('Please enter your password.');
      return;
    }

    if (typeof onSignIn === 'function') {
      onSignIn({ email: email.trim(), password });
    } else {
      alert('Signed in (demo).');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Forgot Password clicked (demo).');
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    alert('Continue with Google (demo).');
  };

  const handleFacebookSignIn = (e) => {
    e.preventDefault();
    alert('Continue with Facebook (demo).');
  };

  return (
    <div className="signin-root">
      <main className="screen sign-in" role="main" aria-label="Sign In Screen">
        {/* Minimal Status Bar (Light mode) */}
        <div className="status-bar" aria-hidden="true">
          <div className="status-time">19:27</div>
          {/* Symbols omitted for brevity; focus is on sign-in UI */}
        </div>

        {/* Title */}
        <div id="title-hello" className="typo-60" aria-hidden="false">Hello,</div>
        <div id="title-welcome" className="typo-61" aria-hidden="false">Welcome Back!</div>

        {/* Sign-in form fields */}
        <form id="sign-in-form" aria-label="Sign In Form" onSubmit={handleSubmit}>
          {/* Email field */}
          <label id="label-email" className="label typo-66" htmlFor="email">Email</label>
          <div id="email-shell" className="input-shell" role="group" aria-label="Email Input">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <label id="label-password" className="label typo-66" htmlFor="password">Enter Password</label>
          <div id="password-shell" className="input-shell" role="group" aria-label="Password Input">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        {/* Forgot Password */}
        <div id="forgot-password" className="typo-62" role="button" aria-label="Forgot Password">
          <a className="link" href="#" tabIndex={0} onClick={handleForgotPassword}>Forgot Password?</a>
        </div>

        {/* Big Sign In Button (style_11) */}
        <button id="sign-in-btn" className="btn-primary" aria-label="Sign In" type="submit" form="sign-in-form">
          <span className="btn-label typo-58">Sign In</span>
          <span className="btn-icon" aria-hidden="true">
            {/* Icon/General/Arrow-Right (simplified inline SVG, color matches text color) */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10h11" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M10.5 5.5L15 10l-4.5 4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>

        {/* Divider: Or Sign in With */}
        <div id="divider" aria-hidden="false">
          <hr className="divider-line line-left" />
          <div className="label typo-64">Or Sign in With</div>
          <hr className="divider-line line-right" />
        </div>

        {/* Social buttons (style_126) */}
        <button id="btn-google" className="social-btn" aria-label="Continue with Google" onClick={handleGoogleSignIn}>
          <img alt="Google icon" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ce8e2ce-50ee-4f93-8317-ec9497a9e684" />
        </button>

        <button id="btn-facebook" className="social-btn" aria-label="Continue with Facebook" onClick={handleFacebookSignIn}>
          <img alt="Facebook icon" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/841c7ecf-b169-4299-bc8f-774f87f86aa7" />
        </button>

        {/* Bottom prompt */}
        <div id="signup-prompt" className="typo-63" aria-hidden="false">
          Don’t have an account? <a className="link" href="#" aria-label="Sign up" onClick={(e) => e.preventDefault()}>Sign up</a>
        </div>

        {/* Home Indicator */}
        <div id="home-indicator" className="home-indicator" aria-hidden="true">
          <div className="bar"></div>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
