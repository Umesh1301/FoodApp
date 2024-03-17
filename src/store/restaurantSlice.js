import { createSlice, current } from "@reduxjs/toolkit";
import RestaurantsData from "../constants/RestaurantsData";
import { Navigate } from "react-router-dom";

const initialState = {
  restaurantId: null,
  restauantList: RestaurantsData,
  cartItems: [],
  cartProducts: [],
};

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.restaurantId === null && state.cartItems.length === 0) {
        state.restaurantId = action.payload.resId;
        state.cartItems.push({
          itemId: action.payload.foodItemId,
          itemQuantity: 1,
        });
        state.cartProducts.push({ ...action.payload.fooditem, Qty: 1 });
      } else {
        if (state.restaurantId === action.payload.resId) {
          const foodItemIdx = state.cartItems.findIndex(
            (item) => item.itemId === action.payload.foodItemId
          );
          const foodItemIdx2 = state.cartProducts.findIndex(
            (item) => item.id === action.payload.foodItemId
          );
          if (foodItemIdx > -1) {
            state.cartItems[foodItemIdx].itemQuantity += 1;
            state.cartProducts[foodItemIdx2].Qty += 1;
          } else {
            state.cartItems.push({
              itemId: action.payload.foodItemId,
              itemQuantity: 1,
            });
            state.cartProducts.push({ ...action.payload.fooditem, Qty: 1 });
          }
        } else {
          state.restaurantId = action.payload.resId;
          state.cartItems = [];
          state.cartProducts = [];
          state.cartItems.push({
            itemId: action.payload.foodItemId,
            itemQuantity: 1,
          });
          state.cartProducts.push({ ...action.payload.fooditem, Qty: 1 });
        }
      }
    },
    decrement: (state, action) => {
      if (state.restaurantId === action.payload.resId) {
        if (state.cartItems.length > 0) {
          const foodItemIdx = state.cartItems.findIndex(
            (item) => item.itemId === action.payload.foodItemId
          );
          const foodItemIdx2 = state.cartProducts.findIndex(
            (item) => item.id === action.payload.foodItemId
          );
          if (foodItemIdx > -1) {
            if (state.cartItems[foodItemIdx].itemQuantity > 1) {
              state.cartItems[foodItemIdx].itemQuantity -= 1;
              state.cartProducts[foodItemIdx2].Qty -= 1;
            } else {
              // const remainingItems = state.cartItems.filter(
              //   (item) => item.itemQuantity !== 1)
              //   const remainingItem1 = state.cartProducts.filter(
              //     (item) => item.Qty !=0
              // );
              state.cartItems.splice(foodItemIdx, 1); // Remove item from cartItems array
              state.cartProducts.splice(foodItemIdx2, 1);
            }
          } else {
            alert(" This Item is not present in the cart");
          }
        } else {
          alert(" This Item is not present in the cart");
        }
      } else {
        prompt("You are in some other restaurant");
      }
    },
    selectRestaurant: (state, action) => {
      console.log(action.payload);
      if (state.restaurantId === null) {
        state.restaurantId = action.payload.id;
      } else {
        if (state.restaurantId !== action.payload.id) {
          state.cartItems = [];
          state.cartProducts = [];
          state.restaurantId = action.payload.id;
        }
      }
    },
    cartAddedItemHandler: (state, action) => {
      const foodId = action.payload.items;

      const CartProductIndex = state.cartProducts.findIndex(
        (items) => items.id === foodId
      );
      const CartProductIndex2 = state.cartItems.findIndex(
        (items) => items.itemId === foodId
      );

      state.cartProducts[CartProductIndex].Qty += 1;
      state.cartItems[CartProductIndex2].itemQuantity += 1;
    },
    CartDeleteItemHandler: (state, action) => {
      const foodId = action.payload;

      const CartProductIndex = state.cartProducts.findIndex(
        (items) => items.id === foodId
      );
      const CartProductIndex2 = state.cartItems.findIndex(
        (items) => items.itemId === foodId);
      if (state.cartProducts[CartProductIndex].Qty > 1) {
        state.cartProducts[CartProductIndex].Qty -= 1;
        state.cartItems[CartProductIndex2].itemQuantity -= 1;
      } else {
        // Remove item from cartItems array
        state.cartProducts.splice(CartProductIndex, 1);
        state.cartItems.splice(CartProductIndex2, 1);
      }
    },
    CartCheckOutHandler:(state)=>{
      console.log("working")
state.cartProducts=[]
state.cartItems=[]

    }
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,

  selectRestaurant,
  cartAddedItemHandler,
  CartDeleteItemHandler,
  CartCheckOutHandler
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
