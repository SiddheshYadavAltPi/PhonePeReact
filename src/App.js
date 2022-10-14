import './App.scss';


// Fontawesome 
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft,faBagShopping,faFileCircleCheck,faHouse,faIndianRupeeSign,faQrcode, faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { faUser,faBell,faQuestionCircle } from '@fortawesome/free-regular-svg-icons'



// Router 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// Components 
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Otp from './components/Otp'
import LandingPage from './components/LandingPage';

import Home from './components/Pages/Home';
import Stores from './components/Pages/Stores';
import Insurance from './components/Pages/Insurance';
import Wealth from './components/Pages/Wealth';
import History from './components/Pages/History';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/otp",
    element: <Otp/>,
  },
  {
    path: "/landingpage",
    element: <LandingPage/>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
      {
        path: "wealth",
        element: <Wealth />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);



library.add(fab,faUser,faArrowLeft,faBell,faQrcode,faQuestionCircle,faHouse,faBagShopping,faFileCircleCheck,faIndianRupeeSign,faRightLeft);
function App() {
  return (
    <div id="app" className=" w-screen h-full min-h-full box-border">      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
