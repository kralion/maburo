import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/dashboard.tsx";
import TicketPage from "./pages/ticket.tsx";
import History from "./pages/history.tsx";
import Schedule from "./pages/schedule.tsx";
import Settings from "./pages/settings.tsx";
import Support from "./pages/support.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/ticket",
        element: <TicketPage />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
