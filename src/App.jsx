import FirstWebPage from "./component/FirstWebPage";

import { Route, Routes } from "react-router-dom";
import CheckoutCart from "./component/CheckoutCart";
import FoodCart from "./component/FoodCart";
import HeaderOfFoodApp from "./component/HeaderOfFoodApp";
import RestaurantFoodItemList from "./component/RestaurantFoodItemList";
import SignIn from "./credentials/SignIn";
import SignUp from "./credentials/SignUp";

function App() {
  return (
    <div>
      <HeaderOfFoodApp/>
      <Routes>
        <Route
          path="/restaurantFoodItemList/:id"
          element={<RestaurantFoodItemList />}
        ></Route>
        <Route path="/cartCheckout" element={<CheckoutCart />}></Route>
        <Route path="/foodcart" element={<FoodCart />} />
        <Route path="/" element={<FirstWebPage />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
