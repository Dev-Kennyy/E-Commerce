import { useNavigate } from "react-router-dom";
import EditProfile from "../components/EditProfile";

function ManageAccount() {
  const navigate = useNavigate("");
  return (
    <div>
      <div className="m-8 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
          / <span className="text-black">My Account</span>
        </div>
        <div className="text-sm">
          Welcome! <span className="text-[#DB4444]">Username</span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <EditProfile />
      </div>
    </div>
  );
}

export default ManageAccount;
