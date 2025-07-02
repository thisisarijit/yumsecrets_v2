import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <SigninSignup /> },
      { path: "meal/:id", element: <MealDetails /> },
      { path: "meal/category/:name", element: <Category /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return (
  // <BrowserRouter>
  //   <Header />
  //   <Sidebar />
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/register" element={<SigninSignup />} />
  //     <Route path="/meal/:id" element={<MealDetails />} />
  //     <Route path="/meal/category/:name" element={<Category />} />
  //     <Route path="*" element={<Error />} />
  //   </Routes>
  //   <Footer />
  // </BrowserRouter>

  // );
}

export default App;
