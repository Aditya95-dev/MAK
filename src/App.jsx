import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import AppLayout from "./components/AppLayout";
import CelebrateWithUs from "./pages/CelebrateWithUs";
import Contact from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import Gallery from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import PDD from "./pages/PDD";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogCardOne from "./components/BlogCardOne";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },

        // Services
        { path: "/services", element: <Services /> },

        // Individual service routes
        { path: "/services/product-design-dva", element: <PDD /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog/cardone", element: <BlogCardOne /> },
        { path: "/menu", element: <Menu /> },
        { path: "/celebratewithus", element: <CelebrateWithUs /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
