import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import SignInput from "../../components/SignInput";

function SignUpForm() {
  const navigate = useNavigate("");
  return (
    <div>
      <LoginHeader h1="Create an account" p="Enter your details below" />
      <div className="flex flex-col gap-9">
        <SignInput placeholder="Name" type="text" />
        <SignInput placeholder="Email / Phone Number" type="text" />
        <SignInput placeholder="Password" type="password" />
        <button className="rounded-sm bg-[#DB4444] p-4 text-sm text-white">
          Create Account
        </button>
        <button className="flex items-center justify-center gap-4 rounded-sm border bg-transparent p-4 text-sm text-black">
          <img src="Icon-Google.png" alt="" /> <span>Sign Up with Google</span>
        </button>
        <p className="text-gray-500">
          Already have account?
          <span
            className="cursor-pointer pl-3 text-black underline hover:text-[#DB4444]"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
