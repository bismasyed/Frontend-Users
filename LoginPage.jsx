import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic login logic simulation
    console.log(`Logging in as ${role} with username: ${username}`);
    // Redirect based on role (replace with actual authentication logic later)
    if (role === 'student') {
      navigate('/'); // Navigate to Registered User Home
    } else if (role === 'admin') {
      navigate('/admin/dashboard'); // Navigate to Super Admin Dashboard (adjust route as needed)
    } else {
      navigate('/visitor'); // Navigate to Visitor Home (adjust route as needed)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Role</label>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="student">Student</option>
              <option value="admin">Admin/Faculty/Security</option>
              {/* <option value="visitor">Visitor</option> */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
         <p className="mt-2 text-center text-sm">
          Or continue as a <a href="/visitor" className="text-blue-600 hover:underline">Visitor</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

