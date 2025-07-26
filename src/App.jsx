import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./pages/MainHome";
import SignUpPage from "./pages/SignUp/PageSignUp.jsx";
import AppLayOut from "./pages/AppLayOut";
import Login from "./pages/SignUp/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayOut />}>
          <Route index element={<MainHome />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
