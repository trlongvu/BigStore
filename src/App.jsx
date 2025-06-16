import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import { createContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom';
import { IoClose } from 'react-icons/io5';
import ProductDetailsComponent from './components/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/Cart';
import Verify from './pages/Verify';
import toast, { Toaster } from 'react-hot-toast';
import ForgetPasswordPage from './pages/ForgerPassword';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import MyList from './pages/MyList';
import Orders from './pages/Orders';
import { fetchDataFromApi } from './utils/api';
import Address from './pages/MyAccount/address';

const MyContext = createContext();

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token !== undefined && token !== null && token !== '') {
      setIsLogin(true);
      fetchDataFromApi(`/api/users/user-details`).then((res) => {
        if (res.success) {
          setUserData(res.data);
          return;
        }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        openAlertBox('error', res.message);
        setIsLogin(false);
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleDrawerCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    }
    if (status === 'error') {
      toast.error(msg);
    }
  };
  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    openCartPanel,
    toggleDrawerCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route
              path="/productListing"
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path="/product/:id"
              exact={true}
              element={<ProductDetails />}
            />
            <Route path="/cart" exact={true} element={<CartPage />} />
            <Route path="/check-out" exact={true} element={<Checkout />} />
            <Route path="/my-account" exact={true} element={<MyAccount />} />
            <Route path="/love" exact={true} element={<MyList />} />
            <Route path="/order" exact={true} element={<Orders />} />
            <Route path="/address" exact={true} element={<Address />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/register" exact={true} element={<Register />} />
            <Route path="/verify" exact={true} element={<Verify />} />

            <Route
              path="/forget-password"
              exact={true}
              element={<ForgetPasswordPage />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" productDetailsModel"
      >
        <DialogContent>
          <div className=" flex w-full productDetailsModelContainer relative">
            <Button
              className=" !size-10 !min-w-10 !rounded-full !text-black !absolute !-top-5 !-right-5"
              onClick={handleCloseProductDetailsModel}
            >
              <IoClose className=" text-2xl" />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className=" col2 w-[60%] px-5 pt-0 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export { MyContext };
