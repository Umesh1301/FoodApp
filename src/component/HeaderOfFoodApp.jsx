import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderOfFoodApp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.restaurant.cartItems);
  // console.log(data);
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <AppBar sx={{ ":hover": { backgroundColor: "green" } }}>
        <Toolbar>
          <RestaurantIcon
            onClick={() => navigate("/")}
            sx={{
              fontSize: "40px",
              ":hover": { color: "orange" },
              cursor: "pointer",
            }}
          ></RestaurantIcon>

          <Typography
            variant="h5"
            sx={{ flexGrow: 1, marginLeft: "20px", ":hover": { color: "red" } }}
          >
            FOODY PEOPLE
          </Typography>

          <div
            style={{
              marginRight: "20px",
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/signUp")}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ marginLeft: "20px" }}
              onClick={() => navigate("/signIn")}
            >
              Sign In
            </Button>
            <span
              onClick={() => navigate("/foodcart")}
              style={{
                backgroundColor: "purple",
                marginLeft: "20px",
                fontSize: "18px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Your Cart{" "}
              <ShoppingCartIcon sx={{ marginLeft: "10px", fontSize:'30px'}}></ShoppingCartIcon>
              <span
                style={{
                  backgroundColor: "orange",
                  color: "black",
                  padding: "5px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                {cartItem?.length}
              </span>
            </span>
          </div>
        </Toolbar>
      </AppBar>
      {/* image which is seen in the background of the first web Page */}
      {/* <img
        width="100%"
        src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg"
        title="Loading"
      /> */}
    </div>
  );
};

export default HeaderOfFoodApp;
