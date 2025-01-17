import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoutes.jsx';
import { store, persistor } from './redux/store'; // Import Redux store and persistor
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Service from './components/Services/Service.jsx';
import Contact from './components/Contact/Contact.jsx';
import Product from './components/Products/Product.jsx';
import Cart from './components/Cart/Cart.jsx';
import SignUp from './components/SignUp/Signup.jsx';
import VerifyCode from './components/VerifyCode/VerifyCode.jsx';
import Login from './components/Login/Login.jsx';
import ResetPassword from './components/ResetPassword/ResetPassword.jsx';
import ForgotPassword from './components/ForgottenPassword/ForgottenPassword.jsx';
import Checkout from './components/Cart/Checkout/Checkout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="product" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path='cart/checkout' element={<Checkout />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="forgotten-password" element={<ForgotPassword />} />

      <Route
        path="verify"
        element={
          <ProtectedRoute tokenKey="verificationToken" redirectTo="/signup">
            <VerifyCode />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
