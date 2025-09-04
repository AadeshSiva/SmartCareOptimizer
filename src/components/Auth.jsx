import React, { useState } from 'react';
import './components.css';
import { Link } from 'react-router-dom';

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57c2.08-1.92,3.28-4.74,3.28-8.09Z" />
        <path d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98,.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z" />
        <path d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43,.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l3.66-2.84Z" />
        <path d="M12,5.38c1.62,0,3.06,.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z" />
    </svg>
);


export default function Auth() {
    const [isLoginView, setIsLoginView] = useState(true);

    const toggleView = () => {
        setIsLoginView(!isLoginView);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log('Login form submitted');
    };

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        console.log('Sign-up form submitted');
    };

    const handleGoogleSignIn = () => {
        console.log('Google Sign-In clicked');
    };

    return (
        <main className="auth-main">
            <div className="auth-inner">
                {isLoginView ? (
                    // Login Form
                    <div className="auth-container">
                        <h2>Login</h2>
                        <form className="auth-form" onSubmit={handleLoginSubmit}>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <Link to='/home' className='auth-sub-btn' type="submit">Log In</Link>
                        </form>
                    </div>
                ) : (
                    // Sign Up Form
                    <div className="auth-container">
                        <h2>Sign Up</h2>
                        <form className="auth-form" onSubmit={handleSignupSubmit}>
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                                <Link to='/home' className='auth-sub-btn' type="submit">Sign Up</Link>
                        </form>
                    </div>
                )}

                <div className="divider">OR</div>

                <button className="google-btn" onClick={handleGoogleSignIn}>
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                </button>

                <p className="toggle-text">
                    {isLoginView ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={toggleView} className="toggle-button">
                        {isLoginView ? 'Sign Up' : 'Log In'}
                    </button>
                </p>
            </div>
        </main>
    );
}