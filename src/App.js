import './App.scss';


// Fontawesome 
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowLeft } from '@fortawesome/free-solid-svg-icons'



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
]);

library.add(fab, faCheckSquare, faCoffee,faArrowLeft);


function App() {
  return (
    <div id="app" className="px-2 w-screen h-full min-h-full box-border">      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
