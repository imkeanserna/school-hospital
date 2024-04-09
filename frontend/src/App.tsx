import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Appbar from "./pages/Appbar";
import Appointment from "./pages/Appointment";
import NotFound from "./pages/NotFound";
import SelectAppointment from "./pages/SelectAppointment";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/appointment/:id" element={<Appointment />} />
          <Route path="/doctors" element={<SelectAppointment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
