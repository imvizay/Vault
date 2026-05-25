import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';

// contexts 
import { UserProvider } from './contexts/UserContext.jsx';

// tanstack query and devtools
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  </UserProvider>,
  

)
