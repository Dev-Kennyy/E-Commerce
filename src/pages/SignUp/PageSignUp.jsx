import SideImage from "../../components/SideImage";
import SignUpForm from "./SignUpForm";

function signUp() {
  return (
    <div className="m-4 flex items-center justify-center gap-5 sm:justify-start xl:gap-20">
      <SideImage />
      <SignUpForm />
    </div>
  );
}

export default signUp;
