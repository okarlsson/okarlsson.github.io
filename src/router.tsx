import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { ErrorPage } from "./pages/error-page";
import { HomePage } from "./pages/home";
import { ExperiencePage } from "./pages/experience";
import { ProjectsPage } from "./pages/projects";
import { AboutPage } from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
