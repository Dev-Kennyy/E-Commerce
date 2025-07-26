import LoginHeader from "../../components/LoginHeader";
import SignInput from "../../components/SignInput";

function LoginForm() {
  return (
    <div>
      <LoginHeader h1="Login to Exclusive Store" p="Enter your details below" />
      <div className="flex flex-col gap-9">
        <SignInput placeholder="Email / Phone Number" type="text" />
        <SignInput placeholder="Password" type="password" />
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="cursor-pointer rounded bg-[#DB4444] p-2 px-4 text-white">
          Log In
        </div>
        <p className="cursor-pointer text-[#DB4444]">Forgot Password?</p>
      </div>
    </div>
  );
}

export default LoginForm;
