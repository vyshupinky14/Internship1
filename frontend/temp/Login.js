import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Simulating a login check (replace with API call in a real app)
        const dummyUser = {
            email: 'user@example.com',
            password: 'password123',
        };

        if (email === dummyUser.email && password === dummyUser.password) {
            // Clear error and save data
            setError('');
            localStorage.setItem('user', JSON.stringify({ username: 'JohnDoe', token: 'dummyToken' }));

            // Navigate to dashboard
            navigate('/dashboard');
        } else {
            // Set an error message if login fails
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>} {/* Display error message */}
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
};

export default Login;
