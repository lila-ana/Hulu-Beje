import { Route, Routes, Navigate } from 'react-router-dom'; // Added Navigate for redirects
import { Provider, useSelector } from 'react-redux';
import store from './Redux/Store/store';
import SignIn from './Pages/Login/SignIn';
import RegistrationForm from './Pages/Register/RegistrationForm';
import Dashboard from './Pages/Dashboard/Dashboard';
import Accounts from './Pages/Accounts/Accounts';
import LandingPage from './Pages/Landing/LandingPage';
import Settings from './Pages/Settings/Settings';
import Orders from './Pages/Orders/Orders';
import Home from './Pages/Home/Home';
import Category from './Pages/Categories/Category';
import ProductDetail from './Pages/Product/ProductDetail';
import ProductSubDetails from './Pages/Product/ProductSubDetails';
import SidebarProducts from './Pages/Sidebar Products/SidebarProducts';

function App() {

  export const checkUserPermission=(necassaryPermissions=[])=>{
    let myPermissions= localStorage?.getItem('permissions')?.split(',');
    return necassaryPermissions?.every((perm)=>{
        return myPermissions?.includes(p)
    })

}   Then     use this   =======>  { checkUserPermission(['view-escalation']) && (<createProduct></product>)}
  
  const withRoleAuthorization = (Component, requiredRoles) => {
    function AuthorizedComponent(props) {
      const userRole = useSelector((state) => state.user.role);
      const userPermissions = useSelector((state) => state.user.permissions);
  
      if (requiredRoles.includes(userRole) && requiredPermissions.every((perm) => userPermissions.includes(perm))) {
        return <Component {...props} />;
      } else {
        return <Navigate to="/unauthorized" />;
      }
    }
  
    return AuthorizedComponent;
  };

    const ProtectedRoute = ({ element: Component, requiredRoles, ...rest }) => {
      const userRole = useSelector((state) => state.user.role);

      if (requiredRoles.includes(userRole)) {
        return <Route {...rest} element={<Component />} />;
      } else {
        return <Navigate to="/unauthorized" />;
      }
    };



  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/register' element={<RegistrationForm/>}></Route>
        <Route path='/productDetail/:id' element={<ProductDetail/>}></Route>
        <Route path='/productSubDetail/:id/:subId' element={<ProductSubDetails/>}></Route>



        {/* <Route path='/dashboard/overview' element={<withRoleAuthorization component={Dashboard} requiredRoles={['admin', 'supplier']} />}></Route>
        <Route path='/dashboard/accounts' element={<withRoleAuthorization component={Accounts} requiredRoles={['admin', 'supplier']} />}></Route>
        <Route path='/dashboard/orders' element={<withRoleAuthorization component={Orders} requiredRoles={['admin', 'supplier']} />}></Route>
        <Route path='/dashboard/categories' element={<withRoleAuthorization component={Category} requiredRoles={['admin']} />}></Route>
        <Route path='/dashboard/products' element={<withRoleAuthorization component={SidebarProducts} requiredRoles={['admin', 'supplier']} />}></Route> */}

        {/* <Route path='/dashboard/overview' element={withRoleAuthorization(Dashboard, ['admin', 'supplier'])}></Route>
        <Route path='/dashboard/accounts' element={withRoleAuthorization(Accounts, ['admin', 'supplier'])}></Route>
        <Route path='/dashboard/orders' element={withRoleAuthorization(Orders, ['admin', 'supplier'])}></Route>
        <Route path='/dashboard/categories' element={withRoleAuthorization(Category, ['admin', 'supplier'])}></Route>
        <Route path='/dashboard/products' element={withRoleAuthorization(SidebarProducts, ['admin', 'supplier'])}></Route>
        <Route path='/dashboard/settings' element={withRoleAuthorization(Settings, ['admin', 'supplier'])}></Route> */}
      </Routes>
      {/* <ProtectedRoute
  path="/dashboard/overview"
  requiredRoles={['admin', 'supplier']}
  element={Dashboard}
/>
<ProtectedRoute
  path="/dashboard/accounts"
  requiredRoles={['admin', 'supplier']}
  element={Accounts}
/>
<ProtectedRoute
  path="/dashboard/orders"
  requiredRoles={['admin', 'supplier']}
  element={Orders}
/>
<ProtectedRoute path="/dashboard/categories" requiredRoles={['admin']} element={Category} />
<ProtectedRoute
  path="/dashboard/products"
  requiredRoles={['admin', 'supplier']}
  element={SidebarProducts}
/> */}

    </Provider>
  )
}

export default App;
