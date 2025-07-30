import { createAsyncThunk } from '@reduxjs/toolkit';

// Mock authentication API - In a real app, these would be actual API calls
const mockAuthAPI = {
  login: async (credentials) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation
    const { email, password } = credentials;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    
    // Simple mock validation - in real app, this would be server-side
    if (email === 'test@example.com' && password === 'password') {
      return {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        phone: '+1234567890',
        role: 'customer',
        createdAt: new Date().toISOString(),
      };
    } else if (email === 'admin@example.com' && password === 'admin') {
      return {
        id: 2,
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        phone: '+1234567890',
        role: 'admin',
        createdAt: new Date().toISOString(),
      };
    } else {
      throw new Error('Invalid email or password');
    }
  },

  signup: async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const { firstName, lastName, email, password, confirmPassword, phone } = userData;
    
    // Mock validation
    if (!firstName || !lastName || !email || !password) {
      throw new Error('All fields are required');
    }
    
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }
    
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    
    // Check if user already exists (mock)
    if (email === 'test@example.com' || email === 'admin@example.com') {
      throw new Error('User with this email already exists');
    }
    
    // Return new user
    return {
      id: Date.now(), // Mock ID
      firstName,
      lastName,
      email,
      phone: phone || '',
      role: 'customer',
      createdAt: new Date().toISOString(),
    };
  }
};

// Login thunk
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await mockAuthAPI.login(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Signup thunk
export const signupUser = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const user = await mockAuthAPI.signup(userData);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Logout thunk (if you need to make API call on logout)
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, you might need to invalidate tokens on the server
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);