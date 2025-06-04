import React from "react";
import ReactDOM from "react-dom";

/*
Header
 - Logo
 - List option
 - user icon
Body
 - Search
 - Courousel
 - Filters Next Phase
 - Restaurants
Footer
 - Copy Rights
 - Links
*/

const jsxHeading = <h1>Hello React from JSX</h1>;
const TitleComponent = () => (
    <h1>This Tiltle Component</h1>
)
const Header = () => (
    <div className="header-container">
        <div className="logo-container">
        <img  className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s" />
        <div className="location-name" >Srikalahasti, Andhra Pradesh, India </div>
        </div>
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-item">Home</li>
                <li className="menu-item">About Us</li>
                <li className="menu-item">Career</li>
                <li className="menu-item">Contact Us</li>
            </ul>
                    <div>
            <img className="user-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&s"/>
        </div>
        </div>

    </div>
);

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input />
            <button>Search </button>
        </div>
    )
}

const Courousel = () => {
    return (
        <div className="coursel-container">
            <div className="arrow-center"><img style={{width: 40+'px'}} src="https://cdn-icons-png.flaticon.com/512/271/271220.png" /></div>
            <div className="coursel-res">
                <img className="image-res" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg"/>
                <div className="coursel-res-name">McDonald's</div>
            </div>
            <div className="coursel-res">
                <img className="image-res" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d26bdfca-3b50-41ea-87e1-e7f9a6b0581d_503003.jpg"/>
                <div className="coursel-res-name">Kanishka Restaurant</div>
            </div>
            <div className="coursel-res">
                <img  className="image-res" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg"/>
                <div className="coursel-res-name">Pizza Hut</div>
            </div>
            <div className="coursel-res">
                <img  className="image-res" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bc2f7e70b995b4095617b21adcde553b"/>
                <div className="coursel-res-name">Happy Kitchen</div>
            </div>
            <div className="arrow-center"><img style={{width: 40+ 'px'}} src="https://cdn-icons-png.flaticon.com/512/32/32213.png"/></div>
        </div>
    )
}

const Restaurant = (props) => {
    const {resData} = props;
    const {image, resName, resRating, resCuisine} = resData
    return (
        <div className="res-list-item">
            <img className="res-list-item-img" src={image}/>
            <h3>{resName}</h3>
            <h4>{resRating} Stars  30 Mins</h4>
            <h5>{resCuisine}</h5>
        </div>
    )
}

const restaurantsList = [
  {
    id: 1,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ogidjgqgh5w4otvuiipj",
    resName: "Dindigul Thalappakatti",
    resRating: "4.5",
    resCuisine: "Biryani, South Indian",
  },
  {
    id: 2,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cf1123e-f4c0-402e-8ed3-c13c5072588b_396753.JPG",
    resName: "Pizza Hut",
    resRating: "4.1",
    resCuisine: "Pizza, Italian, Fast Food",
  },
  {
    id: 3,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5b283b24-3a8e-4feb-90f3-98a9c7a3b5b4_432976.JPG",
    resName: "KFC",
    resRating: "4.2",
    resCuisine: "Chicken, Burgers, Fast Food",
  },
  {
    id: 4,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/c64e7364-7909-417f-a850-ea89f41c318e_643832.jpg",
    resName: "Subway",
    resRating: "4.0",
    resCuisine: "Healthy, Sandwiches, Salads",
  },
  {
    id: 5,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/25/cc5de4a2-d2e6-409a-b97f-57f0c1cc015d_1091172%20(1).jpg",
    resName: "Barbeque Nation",
    resRating: "4.6",
    resCuisine: "BBQ, North Indian, Grill",
  },
  {
    id: 6,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mpl31vrpguxhifsmdrud",
    resName: "McDonald's",
    resRating: "4.2",
    resCuisine: "Burgers, Fries, Beverages",
  },
  {
    id: 7,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d1331113564b015c9d55c48ff48a2553",
    resName: "Domino's Pizza",
    resRating: "4.0",
    resCuisine: "Pizza, Pasta, Desserts",
  },
  {
    id: 8,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m6jahioyu7zrodei5pcq",
    resName: "A2B - Adyar Ananda Bhavan",
    resRating: "4.3",
    resCuisine: "South Indian, Sweets",
  },
  {
    id: 9,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
    resName: "Cream Stone",
    resRating: "4.5",
    resCuisine: "Ice Cream, Desserts",
  },
  {
    id: 10,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/bc55063f-9d8d-439c-bc58-b630bbdc280f_855717.jpg",
    resName: "Burger King",
    resRating: "4.1",
    resCuisine: "Burgers, Beverages",
  },
  {
    id: 11,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/4/5ede9c0c-a61d-40a2-a028-a3ebdd89c2b9_356343.jpg",
    resName: "Starbucks",
    resRating: "4.7",
    resCuisine: "Coffee, Desserts, Snacks",
  },
  {
    id: 12,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cbf725cf7f6e603aa14893125098466c",
    resName: "Chai Point",
    resRating: "4.4",
    resCuisine: "Tea, Beverages, Snacks",
  },
  {
    id: 13,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
    resName: "Behrouz Biryani",
    resRating: "4.6",
    resCuisine: "Biryani, Mughlai",
  },
  {
    id: 14,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/c64e7364-7909-417f-a850-ea89f41c318e_643832.jpg",
    resName: "FreshMenu",
    resRating: "4.1",
    resCuisine: "Continental, Healthy",
  },
  {
    id: 15,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c6d98b17-67f6-4ad0-95a8-cf40554297fb_503001.JPG",
    resName: "Faasos",
    resRating: "4.3",
    resCuisine: "Wraps, Rolls, Fast Food",
  },
  {
    id: 16,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tfzipwjkvvo13dgfmqla",
    resName: "Biryani Blues",
    resRating: "4.0",
    resCuisine: "Biryani, Hyderabadi",
  },
  {
    id: 17,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/21/388ff9c8-ba21-463a-bd6d-458e4cf2abe1_cdf86999-8a2a-411a-8e69-46a628e327c3.png_compressed",
    resName: "Wow! Momo",
    resRating: "4.2",
    resCuisine: "Momos, Chinese",
  },
  {
    id: 18,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08bd0dd086fca288d58adfbc31e38d82",
    resName: "Gong - Modern Asian",
    resRating: "4.7",
    resCuisine: "Asian, Thai, Sushi",
  },
  {
    id: 19,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbe6ad99eabf1f0f76d7f57fc0891984",
    resName: "The Belgian Waffle Co.",
    resRating: "4.5",
    resCuisine: "Desserts, Waffles",
  },
   {
    id: 20,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/c64e7364-7909-417f-a850-ea89f41c318e_643832.jpg",
    resName: "FreshMenu",
    resRating: "4.1",
    resCuisine: "Continental, Healthy",
  },
];



const Restaurants = () => {
    return (
        <div className="res-list-container">
            {
                restaurantsList.map((restaurant) => (
                    <Restaurant key = {restaurant.id} resData={restaurant}/>
                ))
            }


        </div>
    )
}
const Body = () => {
    return (
        <div className="body-container">
            <SearchBar />
            <Courousel />
            <Restaurants />
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}
// ReactDOM.render(jsxHeading, document.getElementById("root"));
ReactDOM.render(<AppLayout/>, document.getElementById("root"));

//ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);