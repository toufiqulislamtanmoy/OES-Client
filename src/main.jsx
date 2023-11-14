import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from './Provider/AuthProviders.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <div className=''>
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>,
)