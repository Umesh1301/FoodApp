import { Card, Grid, Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRestaurant } from "../store/restaurantSlice";

const FirstWebPage = () => {
  const [restaurantId, setRestaurantId] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurantList = useSelector((state) => state.restaurant.restauantList);
  console.log(restaurantList);


  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      {restaurantList.map((item) => (
        <div
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/restaurantFoodItemList/${item.id}`);
            dispatch(selectRestaurant({id:item.id}))
          }}
        >
          <Grid container>
            <Card
              sx={{
                padding: "15px",
                marginLeft: "15px",
                marginTop: "15px",
                bgcolor: "lightsteelblue",
              }}
            >
              <div>
                {" "}
                <img
                  src={item.image}
                  alt="Loading"
                  style={{ maxWidth: "100%" }}
                />
              </div>

              <div style={{ fontSize: "20px" }}>
                <b>{item.restaurantName}</b>
              </div>
              <div>
                <Rating
                  name="Rating"
                  defaultValue={item.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div>{item.description}</div>
            </Card>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default FirstWebPage;
