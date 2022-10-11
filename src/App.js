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

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen/>,
  },
]);

library.add(fab, faCheckSquare, faCoffee);


function App() {
  return (
    <div className="px-2">      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
