import React from 'react'



const RestaurantsData = [
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
      {
        flavor: "Lemon Zest",
        id: 5,
        Qty: 0,
        image:
          "https://annabanana.co/wp-content/uploads/2022/03/Zesty-Lemon-Cake-Feat-1.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest cake.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "8f4c3f8b-8fe4-4dc1-9f0d-2da55a6508b3",
        image:
          "https://imgmedia.lbb.in/media/2018/05/5aedfe5b9d851d40f207b1b4_1525546587683.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Burger.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "7543b3bb-17d0-4f82-99e0-cb5acfe78e0b",
        image:
          "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Burger, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "d19b55a9-8e21-4b6e-bd80-6cb3453a4932",
        image:
          "https://hips.hearstapps.com/vidthumb/images/img-2520-649052caef550.jpg?crop=0.9993505576733023xw:1xh;center,top&resize=1200:*",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Burger.",
      },
      {
        flavor: "Caramel Swirl",
        id: "f9c7158e-739b-4f2b-9ce7-93e41343bf8e",
        image:
          "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Burger.",
      },
      {
        flavor: "Lemon Zest",
        id: "18a41c0b-42f1-45c3-8d3e-1774da6a00d8",
        image:
          "https://toriavey.com/images/2013/06/Spiced-Up-Turkey-Burgers-on-TheShiksa.com-healthy-grilling-recipe-4thofjuly.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Burger.",
      },
      {
        flavor: "Four Cheese",
        id: "de7698f4-6b47-4c53-8a07-30367c52ef9c",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
        rating: 4.7,
        price: 12.99,
        description: "Blend of mozzarella, cheddar, feta, and parmesan.",
      },
      {
        flavor: "Spinach and Feta",
        id: "d1a43a56-b2f2-4da4-9c3f-848f898d0812",
        image:
          "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        rating: 4.3,
        price: 11.99,
        description: "Spinach, feta cheese, and garlic sauce.",
      },
      {
        flavor: "Truffle Mushroom",
        id: "15674645-593d-49b5-bf6b-12f9c482baa7",
        image:
          "https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1205.jpg?size=626&ext=jpg",
        rating: 4.9,
        price: 14.99,
        description: "Mushrooms, truffle oil, and creamy Alfredo sauce.",
      },
      {
        flavor: "Blue Cheese Special",
        id: "9c1e5ba7-4e54-4d1d-a67b-78c4de5bf930",
        image:
          "https://img.freepik.com/free-photo/freshness-gourmet-rustic-wooden-table-generated-by-ai_188544-151869.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.5,
        price: 13.99,
        description: "Blue cheese, caramelized onions, and walnuts.",
      },
      {
        flavor: "Buffalo Chicken Ranch",
        id: "b3e014f7-894f-44cb-b30e-c3ec5ea748d7",
        image:
          "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873982.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.6,
        price: 13.99,
        description: "Buffalo chicken, ranch dressing, and celery.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "c8c04e7e-68bf-4b1c-b8ea-7d8d37210e6b",
        image:
          "https://e0.pxfuel.com/wallpapers/545/1003/desktop-wallpaper-samosa-and-sauce-01848-pics-of-samosa-thumbnail.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Samosha.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "3c390fa9-0313-4aa2-845f-22cb1a23d13f",
        image:
          "https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Samosha, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "32da584d-dfa1-4c2d-a496-89f93dfe1785",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/026/553/215/small/samosa-in-the-kitchen-table-foodgraphy-ai-generated-photo.jpg",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Samosha.",
      },
      {
        flavor: "Caramel Swirl",
        id: "b28f8813-34a5-4ce8-bca9-81ed0b3c62db",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe-500x375.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Samosha.",
      },
      {
        flavor: "Lemon Zest",
        id: "aba21f4c-28ea-41b7-b87b-23a1ac03d52f",
        image:
          "https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Samosha.",
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
      {
        flavor: "Lemon Zest",
        id: 5,
        Qty: 0,
        image:
          "https://annabanana.co/wp-content/uploads/2022/03/Zesty-Lemon-Cake-Feat-1.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest cake.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "8f4c3f8b-8fe4-4dc1-9f0d-2da55a6508b3",
        image:
          "https://imgmedia.lbb.in/media/2018/05/5aedfe5b9d851d40f207b1b4_1525546587683.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Burger.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "7543b3bb-17d0-4f82-99e0-cb5acfe78e0b",
        image:
          "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Burger, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "d19b55a9-8e21-4b6e-bd80-6cb3453a4932",
        image:
          "https://hips.hearstapps.com/vidthumb/images/img-2520-649052caef550.jpg?crop=0.9993505576733023xw:1xh;center,top&resize=1200:*",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Burger.",
      },
      {
        flavor: "Caramel Swirl",
        id: "f9c7158e-739b-4f2b-9ce7-93e41343bf8e",
        image:
          "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Burger.",
      },
      {
        flavor: "Lemon Zest",
        id: "18a41c0b-42f1-45c3-8d3e-1774da6a00d8",
        image:
          "https://toriavey.com/images/2013/06/Spiced-Up-Turkey-Burgers-on-TheShiksa.com-healthy-grilling-recipe-4thofjuly.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Burger.",
      },
      {
        flavor: "Four Cheese",
        id: "de7698f4-6b47-4c53-8a07-30367c52ef9c",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
        rating: 4.7,
        price: 12.99,
        description: "Blend of mozzarella, cheddar, feta, and parmesan.",
      },
      {
        flavor: "Spinach and Feta",
        id: "d1a43a56-b2f2-4da4-9c3f-848f898d0812",
        image:
          "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        rating: 4.3,
        price: 11.99,
        description: "Spinach, feta cheese, and garlic sauce.",
      },
      {
        flavor: "Truffle Mushroom",
        id: "15674645-593d-49b5-bf6b-12f9c482baa7",
        image:
          "https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1205.jpg?size=626&ext=jpg",
        rating: 4.9,
        price: 14.99,
        description: "Mushrooms, truffle oil, and creamy Alfredo sauce.",
      },
      {
        flavor: "Blue Cheese Special",
        id: "9c1e5ba7-4e54-4d1d-a67b-78c4de5bf930",
        image:
          "https://img.freepik.com/free-photo/freshness-gourmet-rustic-wooden-table-generated-by-ai_188544-151869.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.5,
        price: 13.99,
        description: "Blue cheese, caramelized onions, and walnuts.",
      },
      {
        flavor: "Buffalo Chicken Ranch",
        id: "b3e014f7-894f-44cb-b30e-c3ec5ea748d7",
        image:
          "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873982.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.6,
        price: 13.99,
        description: "Buffalo chicken, ranch dressing, and celery.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "c8c04e7e-68bf-4b1c-b8ea-7d8d37210e6b",
        image:
          "https://e0.pxfuel.com/wallpapers/545/1003/desktop-wallpaper-samosa-and-sauce-01848-pics-of-samosa-thumbnail.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Samosha.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "3c390fa9-0313-4aa2-845f-22cb1a23d13f",
        image:
          "https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Samosha, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "32da584d-dfa1-4c2d-a496-89f93dfe1785",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/026/553/215/small/samosa-in-the-kitchen-table-foodgraphy-ai-generated-photo.jpg",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Samosha.",
      },
      {
        flavor: "Caramel Swirl",
        id: "b28f8813-34a5-4ce8-bca9-81ed0b3c62db",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe-500x375.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Samosha.",
      },
      {
        flavor: "Lemon Zest",
        id: "aba21f4c-28ea-41b7-b87b-23a1ac03d52f",
        image:
          "https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Samosha.",
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
      {
        flavor: "Lemon Zest",
        id: 5,
        Qty: 0,
        image:
          "https://annabanana.co/wp-content/uploads/2022/03/Zesty-Lemon-Cake-Feat-1.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest cake.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "8f4c3f8b-8fe4-4dc1-9f0d-2da55a6508b3",
        image:
          "https://imgmedia.lbb.in/media/2018/05/5aedfe5b9d851d40f207b1b4_1525546587683.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Burger.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "7543b3bb-17d0-4f82-99e0-cb5acfe78e0b",
        image:
          "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Burger, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "d19b55a9-8e21-4b6e-bd80-6cb3453a4932",
        image:
          "https://hips.hearstapps.com/vidthumb/images/img-2520-649052caef550.jpg?crop=0.9993505576733023xw:1xh;center,top&resize=1200:*",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Burger.",
      },
      {
        flavor: "Caramel Swirl",
        id: "f9c7158e-739b-4f2b-9ce7-93e41343bf8e",
        image:
          "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Burger.",
      },
      {
        flavor: "Lemon Zest",
        id: "18a41c0b-42f1-45c3-8d3e-1774da6a00d8",
        image:
          "https://toriavey.com/images/2013/06/Spiced-Up-Turkey-Burgers-on-TheShiksa.com-healthy-grilling-recipe-4thofjuly.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Burger.",
      },
      {
        flavor: "Four Cheese",
        id: "de7698f4-6b47-4c53-8a07-30367c52ef9c",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
        rating: 4.7,
        price: 12.99,
        description: "Blend of mozzarella, cheddar, feta, and parmesan.",
      },
      {
        flavor: "Spinach and Feta",
        id: "d1a43a56-b2f2-4da4-9c3f-848f898d0812",
        image:
          "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        rating: 4.3,
        price: 11.99,
        description: "Spinach, feta cheese, and garlic sauce.",
      },
      {
        flavor: "Truffle Mushroom",
        id: "15674645-593d-49b5-bf6b-12f9c482baa7",
        image:
          "https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1205.jpg?size=626&ext=jpg",
        rating: 4.9,
        price: 14.99,
        description: "Mushrooms, truffle oil, and creamy Alfredo sauce.",
      },
      {
        flavor: "Blue Cheese Special",
        id: "9c1e5ba7-4e54-4d1d-a67b-78c4de5bf930",
        image:
          "https://img.freepik.com/free-photo/freshness-gourmet-rustic-wooden-table-generated-by-ai_188544-151869.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.5,
        price: 13.99,
        description: "Blue cheese, caramelized onions, and walnuts.",
      },
      {
        flavor: "Buffalo Chicken Ranch",
        id: "b3e014f7-894f-44cb-b30e-c3ec5ea748d7",
        image:
          "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873982.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.6,
        price: 13.99,
        description: "Buffalo chicken, ranch dressing, and celery.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "c8c04e7e-68bf-4b1c-b8ea-7d8d37210e6b",
        image:
          "https://e0.pxfuel.com/wallpapers/545/1003/desktop-wallpaper-samosa-and-sauce-01848-pics-of-samosa-thumbnail.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Samosha.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "3c390fa9-0313-4aa2-845f-22cb1a23d13f",
        image:
          "https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Samosha, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "32da584d-dfa1-4c2d-a496-89f93dfe1785",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/026/553/215/small/samosa-in-the-kitchen-table-foodgraphy-ai-generated-photo.jpg",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Samosha.",
      },
      {
        flavor: "Caramel Swirl",
        id: "b28f8813-34a5-4ce8-bca9-81ed0b3c62db",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe-500x375.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Samosha.",
      },
      {
        flavor: "Lemon Zest",
        id: "aba21f4c-28ea-41b7-b87b-23a1ac03d52f",
        image:
          "https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Samosha.",
      },
    ],
  },
  {
    restaurantName: "Cocoa Craze Confections",
    id: "Res4",
    food: "Cake",

    image:
      "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.webp?b=1&s=170667a&w=0&k=20&c=CPnBJAsLv6e8ZE1DP_z0zP1uRk2adI-aeQQuPSsK8QU=",
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
      {
        flavor: "Lemon Zest",
        id: 5,
        Qty: 0,
        image:
          "https://annabanana.co/wp-content/uploads/2022/03/Zesty-Lemon-Cake-Feat-1.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest cake.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "8f4c3f8b-8fe4-4dc1-9f0d-2da55a6508b3",
        image:
          "https://imgmedia.lbb.in/media/2018/05/5aedfe5b9d851d40f207b1b4_1525546587683.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Burger.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "7543b3bb-17d0-4f82-99e0-cb5acfe78e0b",
        image:
          "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Burger, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "d19b55a9-8e21-4b6e-bd80-6cb3453a4932",
        image:
          "https://hips.hearstapps.com/vidthumb/images/img-2520-649052caef550.jpg?crop=0.9993505576733023xw:1xh;center,top&resize=1200:*",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Burger.",
      },
      {
        flavor: "Caramel Swirl",
        id: "f9c7158e-739b-4f2b-9ce7-93e41343bf8e",
        image:
          "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Burger.",
      },
      {
        flavor: "Lemon Zest",
        id: "18a41c0b-42f1-45c3-8d3e-1774da6a00d8",
        image:
          "https://toriavey.com/images/2013/06/Spiced-Up-Turkey-Burgers-on-TheShiksa.com-healthy-grilling-recipe-4thofjuly.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Burger.",
      },
      {
        flavor: "Four Cheese",
        id: "de7698f4-6b47-4c53-8a07-30367c52ef9c",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
        rating: 4.7,
        price: 12.99,
        description: "Blend of mozzarella, cheddar, feta, and parmesan.",
      },
      {
        flavor: "Spinach and Feta",
        id: "d1a43a56-b2f2-4da4-9c3f-848f898d0812",
        image:
          "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        rating: 4.3,
        price: 11.99,
        description: "Spinach, feta cheese, and garlic sauce.",
      },
      {
        flavor: "Truffle Mushroom",
        id: "15674645-593d-49b5-bf6b-12f9c482baa7",
        image:
          "https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1205.jpg?size=626&ext=jpg",
        rating: 4.9,
        price: 14.99,
        description: "Mushrooms, truffle oil, and creamy Alfredo sauce.",
      },
      {
        flavor: "Blue Cheese Special",
        id: "9c1e5ba7-4e54-4d1d-a67b-78c4de5bf930",
        image:
          "https://img.freepik.com/free-photo/freshness-gourmet-rustic-wooden-table-generated-by-ai_188544-151869.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.5,
        price: 13.99,
        description: "Blue cheese, caramelized onions, and walnuts.",
      },
      {
        flavor: "Buffalo Chicken Ranch",
        id: "b3e014f7-894f-44cb-b30e-c3ec5ea748d7",
        image:
          "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873982.jpg?size=626&ext=jpg&ga=GA1.1.486912725.1708411327&semt=sph",
        rating: 4.6,
        price: 13.99,
        description: "Buffalo chicken, ranch dressing, and celery.",
      },
      {
        flavor: "Chocolate Fudge",
        id: "c8c04e7e-68bf-4b1c-b8ea-7d8d37210e6b",
        image:
          "https://e0.pxfuel.com/wallpapers/545/1003/desktop-wallpaper-samosa-and-sauce-01848-pics-of-samosa-thumbnail.jpg",
        price: 25.99,
        rating: 4.5,
        description:
          "Indulge in the rich and decadent taste of our signature Chocolate Fudge Samosha.",
      },
      {
        flavor: "Vanilla Bliss",
        id: "3c390fa9-0313-4aa2-845f-22cb1a23d13f",
        image:
          "https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg",
        price: 22.99,
        rating: 4.2,
        description:
          "Experience the classic delight of our Vanilla Bliss Samosha, a timeless favorite.",
      },
      {
        flavor: "Strawberry Fields",
        id: "32da584d-dfa1-4c2d-a496-89f93dfe1785",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/026/553/215/small/samosa-in-the-kitchen-table-foodgraphy-ai-generated-photo.jpg",
        price: 28.99,
        rating: 4.8,
        description:
          "Savor the sweetness of fresh strawberries with our Strawberry Fields Samosha.",
      },
      {
        flavor: "Caramel Swirl",
        id: "b28f8813-34a5-4ce8-bca9-81ed0b3c62db",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe-500x375.jpg",
        price: 26.99,
        rating: 4.6,
        description:
          "Enjoy the delightful swirls of caramel in our Caramel Swirl Samosha.",
      },
      {
        flavor: "Lemon Zest",
        id: "aba21f4c-28ea-41b7-b87b-23a1ac03d52f",
        image:
          "https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg",
        price: 24.99,
        rating: 4.3,
        description:
          "Refresh your palate with the zesty goodness of our Lemon Zest Samosha.",
      },
    ],
  },
];










export default RestaurantsData
