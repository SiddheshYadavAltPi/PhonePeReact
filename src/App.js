import './App.scss';
import SplashScreen from './components/SplashScreen';

// Fontawesome 
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'



// Router 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

library.add(fab, faCheckSquare, faCoffee);


function App() {
  return (
    <div id="app" className="px-2 w-screen h-full min-h-full box-border">      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
