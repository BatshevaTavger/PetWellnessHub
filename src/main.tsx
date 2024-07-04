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
import Services from './components/services.component.tsx';
import Meeting from './components/meeting.component.tsx';
import AppointmentForm from './components/appointmentForm.component.tsx';
import Manager from './components/manager/manager.component.tsx';
import ServicesManager from './components/manager/servicesManager.component.tsx';
import usersManager from './components/manager/usersManager.component.tsx';
import { CssBaseline } from '@mui/material';
import { CurrentUserProvider } from './context/user.context.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  }, {
    path: '/sign-up',
    Component: SignUp,
  }, {
    path: '/sign-in',
    Component: SignIn,
  }, {
    path: '/services',
    Component: Services,
  }, {
    path: '/meeting',
    Component: Meeting,
  }, {
    path: '/appointmentForm',
    Component: AppointmentForm,
  },{
    path: '/manager',
    Component: Manager,
  }, {
    path: '/manager/servicesManager',
    Component: ServicesManager,
  }, {
    path: '/manager/usersManager',
    Component: usersManager,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CssBaseline />
      <App />
      <RouterProvider router={router} />
    </CurrentUserProvider>
  </React.StrictMode>,
)
