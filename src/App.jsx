import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  MealDetails,
  Error,
  Category,
  SigninSignup,
} from "./pages/index.jsx";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SigninSignup />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
