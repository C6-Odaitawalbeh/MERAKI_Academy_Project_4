import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header/header";
import Main from "./components/Main-Page/main";
import Search from "./components/search-page/search";
import EditProduct from "./components/EditProduct/edit";
import Cart from "./components/Cart/cart";
import Controller from "./components/ControllerProduct/admin";
import Creat from "./components/Create-Products/createProducts";
import ProductDetailes from "./components/Product-More-Detailes/detailesProduct";
import HandelUsersAndDelete from "./components/Delete-Users/deleteuser";
import Ascending from "./components/Filter-Products/ascending";
import Descending from "./components/Filter-Products/descending";
import FilterByPrice from "./components/Filter-Products/filterByPrice";
import ProtectedRouter from "./components/ProtuctedRoute/protucted";
import AppliancesCategories from "./components/Caterories/appliances";
import ElectronicsCategories from "./components/Caterories/electronics";
import Computers from "./components/Caterories/computers";
import ClothingAndShoesAndJewelry from "./components/Caterories/clothingAndShoesAndJewelry";
import BeautyAndpersonalcare from "./components/Caterories/beautyAndPersonalca";
import Baby from "./components/Caterories/baby";
import AutomotivePartsAccessories from "./components/Caterories/automotivePartsAndAccessories";
import ArtsAndCraftsSewing from "./components/Caterories/artsAndCraftsAndSewing";
import AppsAGames from "./components/Caterories/appsAndGames";
import Order from "./components/Order/order";
import Payment from "./components/Payment/payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LpQ8yCzTls4L5kgpWN9iqW5WkWzZnbVvbzl2DWRIBVyA9mMSxmMsE9w9gjgZ9NFEDBbhyvRIGlWcMSp7A2WuT5N00o2L7JV36"
);

// const option = {
//   clientSecret: '{{CLIENT_SECRET}}',
// }

// let [usertoken,role,user,admin] = ProtectedRouter()
// console.log(usertoken);
// console.log(role);
// console.log(user);
// console.log(admin);

function App() {
  
  return (
    <Elements stripe={stripePromise} >

    <div className="App">
      {<Header />}
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Main />} />
          <Route path="/products/search" element={<Search />} />
          <Route path="/edit/prduct" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/manage" element={<Controller />} />
          <Route path="/admin/manage/create" element={<Creat />} />
          <Route path="/product/detailes" element={<ProductDetailes />} />
          <Route
            path="/admin/manage/users"
            element={<HandelUsersAndDelete />}
          />
          <Route path="/products/filter_1" element={<Ascending />} />
          <Route path="/products/filter_2" element={<Descending />} />
          <Route path="/products/search_1" element={<FilterByPrice />} />
          <Route
            path="/products/categories/appliances"
            element={<AppliancesCategories />}
          />
          <Route
            path="/products/categories/electronics"
            element={<ElectronicsCategories />}
          />
          <Route
            path="/products/categories/computers"
            element={<Computers />}
          />
          <Route
            path="/products/categories/clothing&shoes&jewelry"
            element={<ClothingAndShoesAndJewelry />}
          />
          <Route
            path="/products/categories/beauty&personalcare"
            element={<BeautyAndpersonalcare />}
          />
          <Route path="/products/categories/baby" element={<Baby />} />
          <Route
            path="/products/categories/automotiveParts&accessories"
            element={<AutomotivePartsAccessories />}
          />
          <Route
            path="/products/categories/arts&crafts&sewing"
            element={<ArtsAndCraftsSewing />}
          />
          <Route
            path="/products/categories/apps&games"
            element={<AppsAGames />}
          />
          <Route path="/cart/by" element={<Order />} />
          <Route path="/cart/payment" element={<Payment />} />
      </Routes>
    </div>
    </Elements>
  );
}

export default App;
