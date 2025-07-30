import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/slices/authThunks";
import { selectUserLoading, selectUserError, selectIsAuthenticated, clearError } from "../../store/slices/userSlice";
import LoginHeader from "../../components/LoginHeader";

function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const isLoading = useAppSelector(selectUserLoading);
  const error = useAppSelector(selectUserError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // Redirect if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Clear error when component unmounts or form changes
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      return;
    }

    try {
      await dispatch(loginUser(formData)).unwrap();
      // Navigation will be handled by the useEffect above
    } catch (error) {
      // Error is handled by the rejected case in the slice
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <LoginHeader h1="Login to Exclusive Store" p="Enter your details below" />
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Email"
            className="border-b border-gray-300 py-2 focus:border-[#DB4444] focus:outline-none"
            required
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Password"
            className="border-b border-gray-300 py-2 focus:border-[#DB4444] focus:outline-none"
            required
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <button
            type="submit"
            disabled={isLoading || !formData.email || !formData.password}
            className="cursor-pointer rounded bg-[#DB4444] p-3 px-8 text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
          <p className="cursor-pointer text-[#DB4444] hover:text-red-600">
            Forgot Password?
          </p>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-[#DB4444] hover:text-red-600 underline"
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Demo credentials */}
        <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <p>Email: test@example.com</p>
          <p>Password: password</p>
          <p className="mt-2">Admin: admin@example.com / admin</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
