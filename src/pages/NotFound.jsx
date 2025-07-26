import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate("");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-9 p-8">
      <h1 className="text-6xl font-bold">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <button
        className="cursor-pointer bg-[#DB4444] p-3 text-white"
        onClick={() => navigate("/")}
      >
        Back to Home page
      </button>
    </div>
  );
}

export default NotFound;
