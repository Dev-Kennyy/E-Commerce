import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./pages/MainHome";
import SignUpPage from "./pages/SignUp/PageSignUp.jsx";
import AppLayOut from "./pages/AppLayOut";
import Login from "./pages/SignUp/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import ClickedProduct from "./pages/ClickedProduct.jsx";
import ManageAccount from "./pages/ManageAccount.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AllProduct from "./pages/AllProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayOut />}>
          <Route index element={<MainHome />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<ClickedProduct />} />
          <Route path="Cart" element={<CartPage />} />
          <Route path="settings" element={<ManageAccount />} />
          <Route path="CheckOut" element={<PaymentPage />} />
          <Route path="Store" element={<AllProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
