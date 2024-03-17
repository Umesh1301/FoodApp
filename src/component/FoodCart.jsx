import { Avatar, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartCheckOutHandler,
  CartDeleteItemHandler,
  cartAddedItemHandler,
} from "../store/restaurantSlice";

const FoodCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.restaurant.cartProducts);

  const restID = useSelector((state) => state.restaurant.restaurantId);

  console.log(restID);

  const cartItemQuqntityHandle = (id, price) => {
    const priceToShow = cartProduct.find((item) => item.id === id);
    if (!priceToShow) {
      // Corrected the variable name here
      return 0;
    } else {
      const amount = priceToShow?.Qty * price;
      return amount.toFixed(2);
    }
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    let TotalCartAmount = 0;
    if (cartProduct.length > 0) {
      for (let i = 0; i < cartProduct.length; i++) {
        totalAmount = totalAmount + cartProduct[i].Qty * cartProduct[i].price;
        TotalCartAmount = totalAmount.toFixed(2);
      }
    }

    return TotalCartAmount;
  };

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        bgcolor: "lightgray",
      }}
    >
      <Card
        sx={{
          width: "500px",
          bgcolor: "indigo",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {cartProduct.length > 0 && (
            <div style={{ color: "white", fontSize: "23px" }}>
              Amount : Rs. {calculateTotalAmount()}{" "}
            </div>
          )}
          {cartProduct.length > 0 ? (
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(CartCheckOutHandler()), navigate("/cartCheckout");
                }}
                sx={{ marginLeft: "40px" }}
              >
                Check Out
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{ marginLeft: "15px" }}
              >
                Close
              </Button>
            </div>
          ) : (
            <Button variant="contained" onClick={() => navigate("/")}>
              Add Items{" "}
            </Button>
          )}
        </div>

        {!!cartProduct.length ? (
          cartProduct?.map((item) => (
            <div>
              <div key={item.id}>
                <Card sx={{ padding: "10px" }}>
                  {" "}
                  <Avatar
                    sx={{ marginLeft: "400px" }}
                    src={item?.image}
                    alt="loading...."
                  />{" "}
                  <div> Flavour :- {item?.flavor}</div>
                  <div>Price :- {item?.price}</div>
                  <div>Qty :- {item?.Qty}</div>
                  <div>
                    Total amount ={" "}
                    {cartItemQuqntityHandle(item.id, item?.price)}
                  </div>
                  <div style={{ marginTop: "10px", marginLeft: "300px" }}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        dispatch(cartAddedItemHandler({ items: item.id }))
                      }
                    >
                      +
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(CartDeleteItemHandler(item.id))}
                      sx={{ marginLeft: "5px" }}
                    >
                      -
                    </Button>
                  </div>
                </Card>
                <Divider sx={{ marginTop: "5px" }} />
              </div>
            </div>
          ))
        ) : (
          <Card
            sx={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              height: "100px",
            }}
          >
            <Typography variant="h5">*/Your cart is empty*/</Typography>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default FoodCart;
