import { createBrowserRouter } from "react-router-dom";
import User from "./pages/User/User";
import Admin from "./pages/Admin/Admin";

// ▼ I managed my route actions below ▼
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ],
  {
    // ▼ This part for possible v7 error I see ▼
    future: {
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
