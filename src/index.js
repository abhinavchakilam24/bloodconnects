import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import Register from './Pages/register';
import FindDonors from './Pages/FindDonors';
import About from './Pages/About';


const engine = new Styletron();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "find",
    element: <FindDonors/>
  },
  {
    path: "about",
    element: <About/>,

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <RouterProvider router={router}/>
      </BaseProvider>
  </StyletronProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
