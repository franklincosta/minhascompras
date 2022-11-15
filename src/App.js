
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './App.css';

import {Home} from './Pages/Home'
import Budget from './Pages/Budget/Budget';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAlpmKJjWXvV1nF-HwgsyHNwuwAWLA1U0",
  authDomain: "minhas-compras-2022.firebaseapp.com",
  projectId: "minhas-compras-2022",
  storageBucket: "minhas-compras-2022.appspot.com",
  messagingSenderId: "476268575844",
  appId: "1:476268575844:web:8b6e61c7fba5e4fa177371",
  measurementId: "G-PW5JZT5YGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>

    </Route>
  )
);

function App() {
  return (
    <div className='container'>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
