import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./components/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
