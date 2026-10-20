import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Countries } from "./Pages/Countries";
import AppLayout from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import "./App.css";
import {  CountryDetails } from "./Pages/CountryDetails";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "countries",
          element: <Countries />,
        },
        {
          path: "/countrydetail/:id",
          element: <CountryDetails/>
        }
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
