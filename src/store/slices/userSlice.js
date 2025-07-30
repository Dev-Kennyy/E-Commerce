import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser, logoutUser } from './authThunks';

// Load user from localStorage
const loadUserFromStorage = () => {
  try {
    const savedUser = localStorage.getItem('ecommerce-user');
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
    return null;
  }
};

// Save user to localStorage
const saveUserToStorage = (user) => {
  try {
    if (user) {
      localStorage.setItem('ecommerce-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ecommerce-user');
    }
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
};

const initialState = {
  currentUser: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
  isLoading: false,
  error: null,
  
  // Registration/Login states
  loginForm: {
    email: '',
    password: '',
  },
  signupForm: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Authentication actions
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      saveUserToStorage(action.payload);
    },

    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    signupStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      saveUserToStorage(action.payload);
    },

    signupFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
      state.loginForm = { email: '', password: '' };
      state.signupForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
      };
      saveUserToStorage(null);
    },

    // Form management
    updateLoginForm: (state, action) => {
      state.loginForm = { ...state.loginForm, ...action.payload };
    },

    updateSignupForm: (state, action) => {
      state.signupForm = { ...state.signupForm, ...action.payload };
    },

    clearForms: (state) => {
      state.loginForm = { email: '', password: '' };
      state.signupForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
      };
    },

    // Profile management
    updateProfile: (state, action) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
        saveUserToStorage(state.currentUser);
      }
    },

    clearError: (state) => {
      state.error = null;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login cases
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        saveUserToStorage(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      
      // Signup cases
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        saveUserToStorage(action.payload);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Logout cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.error = null;
        state.loginForm = { email: '', password: '' };
        state.signupForm = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
        };
        saveUserToStorage(null);
      });
  },
});

// Selectors
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;

export const selectLoginForm = (state) => state.user.loginForm;
export const selectSignupForm = (state) => state.user.signupForm;

// Check if user has specific role or permission
export const selectUserRole = (state) => state.user.currentUser?.role || 'customer';
export const selectIsAdmin = (state) => state.user.currentUser?.role === 'admin';

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
  updateLoginForm,
  updateSignupForm,
  clearForms,
  updateProfile,
  clearError,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;