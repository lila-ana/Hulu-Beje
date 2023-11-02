import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Added Navigate for redirects
import { Provider, connect, useSelector } from 'react-redux';
import  {store, persistor } from './Store/store';
import SignIn from './Pages/Login/SignIn';
import RegistrationForm from './Pages/Register/RegistrationForm';
import Dashboard from './Pages/Dashboard/Dashboard';
import Accounts from './Pages/Accounts/Accounts';
import Settings from './Pages/Settings/Settings';
import Orders from './Pages/Orders/Orders';
import Home from './Pages/Home/Home';
import LandingPage from './Pages/Landing/LandingPage';
import Category from './Pages/Categories/Category';
import ProductDetail from './Pages/Product/ProductDetail';
import ProductSubDetails from './Pages/Product/ProductSubDetails';
import SidebarProducts from './Pages/Sidebar Products/SidebarProducts';
import { PersistGate } from 'redux-persist/integration/react';
import Homes from './Pages/Home/Homes';
import { useEffect } from 'react';

function App({token}) {

console.log(token);


  return (
 
    <BrowserRouter>
      <Routes>
          {!token?
            ( 
              <>
                <Route path='/login' element={<SignIn/>}></Route>
                <Route path='/register' element={<RegistrationForm/>}></Route>
                <Route path='/home' element={<Homes/>}></Route>
                <Route path='/' element={<LandingPage/>}></Route>
              </>
            ) : (
              <>
                <Route path='/home' element={<Homes/>}></Route>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/productDetail/:id' element={<ProductDetail/>}></Route>
                <Route path='/productSubDetail/:id/:subId' element={<ProductSubDetails/>}></Route>
                <Route path='/dashboard/overview' element={<Dashboard/>}></Route>
                <Route path='/dashboard/accounts' element={<Accounts/>}></Route>
                <Route path='/dashboard/orders' element={<Orders/>}></Route>
                <Route path='/dashboard/categories' element={<Category/>}></Route>
                <Route path='/dashboard/products' element={<SidebarProducts/>}></Route>
                <Route path='/dashboard/settings' element={<Settings/>}></Route>
              </>
            )}
         
        </Routes>
    </BrowserRouter>

     
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.users.access_token
  }
}


export default connect(mapStateToProps, null)(App);

