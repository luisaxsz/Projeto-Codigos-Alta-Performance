import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Delivery from './components/Delivery';
import Login from './components/Login';
import Reserva from './components/Reserva'
import Cardapio from './components/Carda'

const router = createBrowserRouter([
  {
    path: "delivery",
    element: <Delivery />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reserva",
    element: <Reserva />,
  },
  {
    path: "/",
    element: <Cardapio />,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
