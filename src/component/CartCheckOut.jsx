import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartCheckOut = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          marginTop: "100px",
          width: "400px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          color: "darkgreen",
          bgcolor: "lightpink",
          fontSize: "25px",
        }}
      >
        Your Order is Placed is successfully
      </Card>
    </div>
  );
};

export default CartCheckOut;
