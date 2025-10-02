import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./components/Home.jsx";
import Statistics from "./components/Statistics.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProductsDetails from "./components/ProductsDetails.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route index={true} element={<Navigate to="/category/AllProduct" />} />
      <Route
        path="/category/:productId"
        loader={() => fetch("/product.json")}
        element={<Home />}
      />
      <Route
        path="/ProductsDetails/:productId"
        loader={() => fetch("/product.json")}
        element={<ProductsDetails />}
      />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
