import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Home from './Pages/Home';

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Home />
    </QueryClientProvider>
  );
};
export default App;
