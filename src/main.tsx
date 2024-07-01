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
import Common from './components/common.component.tsx';
import Manager from './components/manager/manager.component.tsx';
import ManagerMeeting, { MeetingManager } from './components/manager/meetingManager.component.tsx';
import Update from './components/manager/update.component.tsx';

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
  }, {
    path: '/common',
    Component: Common,
  }, {
    path: '/manager',
    Component: Manager,
    // children: [

    // ]
  }, {
    path: '/manager/meetingManager',
    Component: MeetingManager,
  },{
    path: '/update',
    Component: Update,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
