import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import GettingStarted from "./Pages/GettingStarted";

/**
 * Define the routes for the application
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
	{
		path: '/getting-started',
		element: <GettingStarted />
	}
])

export default router