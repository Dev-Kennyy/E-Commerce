import SideImage from "../../components/SideImage";
import LoginForm from "./LoginForm";
function Login() {
  return (
    <div className="m-4 flex items-center justify-center gap-5 sm:justify-start xl:gap-20">
      <SideImage />
      <LoginForm />
    </div>
  );
}

export default Login;
