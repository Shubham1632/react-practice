import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";
import AboutPokemon from "./components/AboutPokemon";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
  {
    path: "/details",
    children: [
      {
        path: ":nameorId",
        element: <PokemonDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
