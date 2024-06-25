import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home.component.tsx';
import { SignUp } from './components/signup.component.tsx';
import SignIn from './components/signIn.component.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    } , {
      path: '/sign-up',
      Component: SignUp,
    }, {
      path: '/sign-in',
      Component: SignIn,
    }                                    
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
