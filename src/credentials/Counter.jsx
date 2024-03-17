import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  multiplyby2,
  stringAddition,
  showTheImageOfTheUser,
} from "../store/counterSlice";

const Counter = () => {
  const data = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.id}>{item.restaurantName}</div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
