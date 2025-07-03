import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  MealDetailsPage,
  ErrorPage,
  CategoryPage,
  SigninSignup,
} from "./pages/index.jsx";
import RootLayout from "./pages/Root.jsx";
import { mealDetailsLoader } from "./pages/MealDetailsPage.jsx";
import { categoryLoader } from "./pages/CategoryPage.jsx";
import { homeLoader } from "./pages/HomePage.jsx";
// import Loader from "./components/Loader.jsx";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      { path: "register", element: <SigninSignup /> },
      {
        path: "meal/:id",
        element: <MealDetailsPage />,
        loader: mealDetailsLoader,
      },
      {
        path: "meal/category/:name",
        element: <CategoryPage />,
        loader: categoryLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
