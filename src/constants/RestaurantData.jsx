import React from "react";

const RestaurantData = [
  {
    restaurantName: "Sweet Delights",
    id: "Res1",
    food: "Cake",

    image:
      "https://media.istockphoto.com/id/1464788033/photo/tablet-bartender-or-small-business-people-for-communication-networking-or-online-order-check.webp?b=1&s=170667a&w=0&k=20&c=zx5BCFgb5R2oubUW85VduknSmB49jj-h4IFb5Xp3oLk=",
    rating: 4.5,
    description: "We are provide the Best food in the market",
    foodItems: [
      {
        flavor: "Chocolate Fudge",
        id: 1,
        Qty: 0,
        image:
          "https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-1701x1423.jpg.webp",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge cake.",
      },
      {
        flavor: "Vanilla Bliss",
        id: 2,
        Qty: 0,
        image:
          "https://www.kukkr.com/cdn/shop/products/choco-vanilla-cake-kukkr-cakes.jpg?v=1678855956",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss cake, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: 3,
        Qty: 0,
        image:
          "https://www.kukkr.com/cdn/shop/products/strawberry-cake-kukkr-cakes.jpg?v=1678855948&width=1946",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry cake.",
      },
      {
        flavor: "Caramel Swirl",
        id: 4,
        Qty: 0,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salted-caramel-cake-18456ec.jpg?quality=90&resize=440,400",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl cake.",
      },
    ],
  },
  {
    restaurantName: "Fruity Fusion Bakery",
    id: "Res2",
    food: "Cake",
    image:
      "https://media.istockphoto.com/id/1478742888/photo/happy-couple-eating-pizza-with-a-group-of-friends.webp?b=1&s=170667a&w=0&k=20&c=fw1ERo3_5JXH1v4Y6_Hu0SdbWPcLW7kwT0iiYINZ7QE=",
    rating: 4.5,
    description: "We are provide the Best food in the market",
    foodItems: [
      {
        flavor: "Chocolate Fudge",
        id: 1,
        Qty: 0,
        image:
          "https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-1701x1423.jpg.webp",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge cake.",
      },
      {
        flavor: "Vanilla Bliss",
        id: 2,
        Qty: 0,
        image:
          "https://www.kukkr.com/cdn/shop/products/choco-vanilla-cake-kukkr-cakes.jpg?v=1678855956",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss cake, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: 3,
        Qty: 0,
        image:
          "https://www.kukkr.com/cdn/shop/products/strawberry-cake-kukkr-cakes.jpg?v=1678855948&width=1946",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry cake.",
      },
      {
        flavor: "Caramel Swirl",
        id: 4,
        Qty: 0,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salted-caramel-cake-18456ec.jpg?quality=90&resize=440,400",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl cake.",
      },
    ],
  },
  {
    restaurantName: "Velvet Elegance",
    id: "Res3",
    food: "Cake",
    image:
      "https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.webp?b=1&s=170667a&w=0&k=20&c=TTATB_esYszT-yzqQixyDBJeZQfcXjHwDs6-PhnMDcE=",
    rating: 4.5,
    description: "We are provide the Best food in the market",
    foodItems: [
      {
        flavor: "Chocolate Fudge",
        id: 1,
        Qty: 0,
        image:
          "https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-1701x1423.jpg.webp",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge cake.",
      },
      {
        flavor: "Vanilla Bliss",
        id: 2,
        Qty: 0,
        image:
          "https://www.kukkr.com/cdn/shop/products/choco-vanilla-cake-kukkr-cakes.jpg?v=1678855956",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss cake, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: 3,
        Qty: 0,
        image:
          "https://www.kukkr.com/cdn/shop/products/strawberry-cake-kukkr-cakes.jpg?v=1678855948&width=1946",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry cake.",
      },
      {
        flavor: "Caramel Swirl",
        id: 4,
        Qty: 0,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salted-caramel-cake-18456ec.jpg?quality=90&resize=440,400",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl cake.",
      },
    ],
  },
 
];

export default RestaurantData;
