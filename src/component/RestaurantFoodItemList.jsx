import { Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  cartAddedItemHandler,
  decrement,
  increment,
} from "../store/restaurantSlice";

const RestaurantFoodItemList = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const restaurantItems = useSelector(
    (state) => state.restaurant.restauantList
  );

  const cartItems = useSelector((state) => state.restaurant.cartItems);
  const selectedRestaurant = restaurantItems.filter(
    (restaurantID) => restaurantID.id === params.id
  );

  // console.log(selectedRestaurant);

  const quantityHandle = (id) => {
    const quantityToShow = cartItems.find((item) => item.itemId === id);
    if (!quantityToShow) {
      // Corrected the variable name here
      return 0;
    } else {
      return quantityToShow?.itemQuantity;
    }
  };
  const totalAmountOfItem = (id, price) => {
    const priceToShow = cartItems.find((item) => item.itemId === id);
    if (!priceToShow) {
      // Corrected the variable name here
      return 0;
    } else {
      const amount = priceToShow?.itemQuantity * price;
      return amount.toFixed(2);
    }
  };

  return (
    <div>
      <div
        style={{
          marginTop: "90px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent:'flex-start',
          alignItems:'center',
          fontSize: "40px",
          fontStyle: "italic",
        }}
      >
        {selectedRestaurant[0].restaurantName}
      </div>

      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",

          marginTop: "20px",
        }}
      >
        {selectedRestaurant.map((item) =>
          item.foodItems.map((fooditem) => (
            <div key={fooditem.id}>
              <Card
                sx={{
                  padding: "15px",
                  marginLeft: "10px",
                  marginTop: "10px",
                  bgcolor: "lightsteelblue",
                  width: "200px",
                }}
              >
                <img
                  src={fooditem.image}
                  alt="loading"
                  style={{ maxWidth: "100%", maxHeight: "100px" }}
                />
                <div>Price-{fooditem.price}</div>
                <div>Rating-{fooditem.rating}</div>
                <div>Description-{fooditem.description}</div>
                <div>Qty-{quantityHandle(fooditem.id)}</div>
                <div>
                 Amount ={" "}
                  {totalAmountOfItem(fooditem.id, fooditem.price)}
                </div>
                <div style={{marginTop:'10px'}}>
                  <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(
                      increment({
                        foodItemId: fooditem.id,
                        resId: params.id,
                        fooditem,
                      })
                    );
                  }}
                >
                  +
                </Button>
                <Button
                  variant="outlined"
                  onClick={() =>
                    dispatch(
                      decrement({
                        foodItemId: fooditem.id,
                        resId: params.id,
                        fooditem,
                      })
                    )
                  }
                  sx={{marginLeft:'10px'}}
                >
                  -
                </Button>
                </div>

                
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantFoodItemList;
