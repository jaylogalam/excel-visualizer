import { Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "@pages/LandingPage";
import LoginPage from "@pages/LoginPage";
import SignupPage from "@pages/SignupPage";
import PaymentPage from "@pages/PaymentPage";
import CompletionPage from "@pages/CompletionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/completion" element={<CompletionPage />} />
      </Routes>
    </>
  );
}

export default App;
