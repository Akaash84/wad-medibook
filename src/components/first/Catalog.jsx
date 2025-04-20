// import React, { useContext } from "react";
// import { useNavigate, useOutletContext } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import "./Catalog.css";

// const medicines = [
//   {
//     id: 1,
//     name: "Paracetamol",
//     description: "For fever and pain relief",
//     price: 100,
//     image: "https://5.imimg.com/data5/SELLER/Default/2021/12/LK/ON/KX/43755673/paracetamol-500mg-tablet-500x500.jpg",
//   },
//   {
//     id: 2,
//     name: "Ibuprofen",
//     description: "Anti-inflammatory pain reliever",
//     price: 200,
//     image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg",
//   },
//   {
//     id: 3,
//     name: "Vitamin C",
//     description: "Immune system booster",
//     price: 180,
//     image: "https://cdn01.pharmeasy.in/dam/products/J13964/vitamin-c-500mg-strip-of-10-chewable-tablets-box-front-1-1627121301.jpg",
//   },
//   {
//         id: 4,
//         name: "Mephtol",
//         description: "For cold and cough",
//         price: 100,
//         image:
//           "https://m.media-amazon.com/images/I/812rX1x1evL._AC_UF1000,1000_QL80_.jpg",
//       },
//       {
//         id: 5,
//         name: "B Complex",
//         description: "Essential vitamins for energy",
//         price: 250,
//         image:
//           "https://www.mybestpharmacy.net/images/thumbs/0056780_medex-b-kompleks-30-kapsul_550.jpeg",
//       },
//       {
//         id: 6,
//         name: "Citrizine",
//         description: "For allergy relief",
//         price: 100,
//         image:
//           "https://nestoronline.in/product_image/images/CHANGE/110723.webp",
//       },
// ];

// function Catalog() {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   const {
//     cart = [],
//     addToCart = () => {},
//     removeFromCart = () => {},
//   } = useOutletContext() || {};

//   const getQuantityInCart = (id) => {
//     const item = cart.find((item) => item.id === id);
//     return item ? item.quantity : 0;
//   };

//   const handleLoginRedirect = () => {
//     navigate("/login", {
//       state: { message: "Please log in to continue" },
//     });
//   };

//   if (!user) {
//     return (
//       <div className="text-center mt-5">
//         <h2 className="text-danger">Please log in to view the catalog.</h2>
//         <button className="btn btn-primary mt-3" onClick={handleLoginRedirect}>
//           Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <main className="main-content">
//         <h1 className="text-light text-center">Medicine Catalog for {user.username}</h1>
//         <div className="medicine-grid">
//           {medicines.map((medicine) => {
//             const quantity = getQuantityInCart(medicine.id);
//             return (
//               <div key={medicine.id} className="medicine-card">
//                 <img src={medicine.image} alt={medicine.name} />
//                 <h3>{medicine.name}</h3>
//                 <p>{medicine.description}</p>
//                 <div className="price">₹{medicine.price}</div>
//                 {quantity > 0 ? (
//                   <div className="quantity-controls">
//                     <button className="quantity-btn minus" onClick={() => removeFromCart(medicine.id)}>-</button>
//                     <span className="quantity">{quantity}</span>
//                     <button className="quantity-btn plus" onClick={() => addToCart(medicine)}>+</button>
//                   </div>
//                 ) : (
//                   <button className="add-to-cart-btn" onClick={() => addToCart(medicine)}>
//                     Add to Cart
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Catalog;



// import React, { useContext } from "react";
// import { useNavigate, useOutletContext } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import "./Catalog.css";

// const categorizedMedicines = {
//   "Pain Relief": [
//     {
//       id: 1,
//       name: "Paracetamol",
//       description: "For fever and pain relief",
//       price: 100,
//       image: "https://5.imimg.com/data5/SELLER/Default/2021/12/LK/ON/KX/43755673/paracetamol-500mg-tablet-500x500.jpg",
//     },
//     {
//       id: 2,
//       name: "Ibuprofen",
//       description: "Anti-inflammatory pain reliever",
//       price: 200,
//       image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg",
//     },
//     {
//       id: 3,
//       name: "Aspirin",
//       description: "Pain relief and anti-inflammatory",
//       price: 120,
//       image: "https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg",
//     },
//   ],
//   "Cold & Allergy": [
//     {
//       id: 4,
//       name: "Citrizine",
//       description: "For allergy relief",
//       price: 100,
//       image: "https://nestoronline.in/product_image/images/CHANGE/110723.webp",
//     },
//     {
//       id: 5,
//       name: "Mephtol",
//       description: "For cold and cough",
//       price: 100,
//       image: "https://m.media-amazon.com/images/I/812rX1x1evL.AC_UF1000,1000_QL80.jpg",
//     },
//     {
//       id: 6,
//       name: "Benadryl",
//       description: "Cough and cold syrup",
//       price: 130,
//       image: "https://bjs.scene7.com/is/image/bjs/54141907?$bjs-Initial600$",
//     },
//   ],
//   "Vitamins & Supplements": [
//     {
//       id: 7,
//       name: "Vitamin C",
//       description: "Immune system booster",
//       price: 180,
//       image: "https://cdn01.pharmeasy.in/dam/products/J13964/vitamin-c-500mg-strip-of-10-chewable-tablets-box-front-1-1627121301.jpg",
//     },
//     {
//       id: 8,
//       name: "B Complex",
//       description: "Essential vitamins for energy",
//       price: 250,
//       image: "https://www.mybestpharmacy.net/images/thumbs/0056780_medex-b-kompleks-30-kapsul_550.jpeg",
//     },
//     {
//       id: 9,
//       name: "Vitamin D3",
//       description: "Supports bone health and immunity",
//       price: 220,
//       image: "https://assets.truemeds.in/Images/ProductImage/TM-DOHE1-001655/vitomin-d3-drops-30ml_vitomin-d3-drops-30ml--TM-DOHE1-001655_1.png",
//     },
//   ],
//   "Digestive Health": [
//     {
//       id: 10,
//       name: "Digene",
//       description: "Antacid for indigestion",
//       price: 60,
//       image: "https://m.media-amazon.com/images/I/61mS7nYrnCL.jpg",
//     },
//     {
//       id: 11,
//       name: "Loperamide",
//       description: "For diarrhea control",
//       price: 90,
//       image: "https://5.imimg.com/data5/SELLER/Default/2021/9/GB/ZD/SG/1217045/loperamide-hydrochloride-tablet-ip.jpg",
//     },
//     {
//       id: 12,
//       name: "Omeprazole",
//       description: "Reduces stomach acid",
//       price: 110,
//       image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/07/a-packet-of-omeprazole-image-credit-siufaiho-2006.jpg?w=1155&h=1730",
//     },
//   ],
//   "Heart & Blood Pressure": [
//     {
//       id: 13,
//       name: "Amlodipine",
//       description: "Treats high blood pressure",
//       price: 150,
//       image: "https://5.imimg.com/data5/SELLER/Default/2023/1/PZ/ZT/QK/88793954/amlodipine-tablets-ip-500x500.jpeg",
//     },
//     {
//       id: 14,
//       name: "Losartan",
//       description: "Blood pressure control",
//       price: 170,
//       image: "https://cdn.sehat.com.pk/product_images/b/333/Losartan_20s_50mg__51892_zoom.jpg",
//     },
//     {
//       id: 15,
//       name: "Atorvastatin",
//       description: "Lowers cholesterol levels",
//       price: 200,
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438075527/NN/MK/HU/760137/atorvastatin-calcium-40-mg-tablet.jpg",
//     },
//   ],
// };

// function Catalog() {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   const {
//     cart = [],
//     addToCart = () => {},
//     removeFromCart = () => {},
//   } = useOutletContext() || {};

//   const getQuantityInCart = (id) => {
//     const item = cart.find((item) => item.id === id);
//     return item ? item.quantity : 0;
//   };

//   const handleLoginRedirect = () => {
//     navigate("/login", {
//       state: { message: "Please log in to continue" },
//     });
//   };

//   if (!user) {
//     return (
//       <div className="text-center mt-5">
//         <h2 className="text-danger">Please log in to view the catalog.</h2>
//         <button className="btn btn-primary mt-3" onClick={handleLoginRedirect}>
//           Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       <main className="main-content">
//         <h1 className="text-light text-center mb-4">
//           Medicine Catalog for {user.username}
//         </h1>

//         {Object.entries(categorizedMedicines).map(([category, meds]) => (
//           <div key={category} className="category-section">
//             <h2 className="text-info mb-3">{category}</h2>
//             <div className="medicine-grid">
//               {meds.map((medicine) => {
//                 const quantity = getQuantityInCart(medicine.id);
//                 return (
//                   <div key={medicine.id} className="medicine-card">
//                     <img src={medicine.image} alt={medicine.name} />
//                     <h3>{medicine.name}</h3>
//                     <p>{medicine.description}</p>
//                     <div className="price">₹{medicine.price}</div>
//                     {quantity > 0 ? (
//                       <div className="quantity-controls">
//                         <button
//                           className="quantity-btn minus"
//                           onClick={() => removeFromCart(medicine.id)}
//                         >
//                           -
//                         </button>
//                         <span className="quantity">{quantity}</span>
//                         <button
//                           className="quantity-btn plus"
//                           onClick={() => addToCart(medicine)}
//                         >
//                           +
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         className="add-to-cart-btn"
//                         onClick={() => addToCart(medicine)}
//                       >
//                         Add to Cart
//                       </button>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default Catalog;





import React, { useContext, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Catalog.css";

const categorizedMedicines = {
  "Pain Relief": [
    {
      id: 1,
      name: "Paracetamol",
      description: "For fever and pain relief",
      price: 100,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/LK/ON/KX/43755673/paracetamol-500mg-tablet-500x500.jpg",
    },
    {
      id: 2,
      name: "Ibuprofen",
      description: "Anti-inflammatory pain reliever",
      price: 200,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg",
    },
    {
      id: 3,
      name: "Aspirin",
      description: "Pain relief and anti-inflammatory",
      price: 120,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg",
    },
  ],
  "Cold & Allergy": [
    {
      id: 4,
      name: "Citrizine",
      description: "For allergy relief",
      price: 100,
      image: "https://nestoronline.in/product_image/images/CHANGE/110723.webp",
    },
    {
      id: 5,
      name: "Mephtol",
      description: "For cold and cough",
      price: 100,
      image: "https://m.media-amazon.com/images/I/812rX1x1evL.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 6,
      name: "Benadryl",
      description: "Cough and cold syrup",
      price: 130,
      image: "https://bjs.scene7.com/is/image/bjs/54141907?$bjs-Initial600$",
    },
  ],
  "Vitamins & Supplements": [
    {
      id: 7,
      name: "Vitamin C",
      description: "Immune system booster",
      price: 180,
      image: "https://cdn01.pharmeasy.in/dam/products/J13964/vitamin-c-500mg-strip-of-10-chewable-tablets-box-front-1-1627121301.jpg",
    },
    {
      id: 8,
      name: "B Complex",
      description: "Essential vitamins for energy",
      price: 250,
      image: "https://www.mybestpharmacy.net/images/thumbs/0056780_medex-b-kompleks-30-kapsul_550.jpeg",
    },
    {
      id: 9,
      name: "Vitamin D3",
      description: "Supports bone health and immunity",
      price: 220,
      image: "https://assets.truemeds.in/Images/ProductImage/TM-DOHE1-001655/vitomin-d3-drops-30ml_vitomin-d3-drops-30ml--TM-DOHE1-001655_1.png",
    },
  ],
  "Digestive Health": [
    {
      id: 10,
      name: "Digene",
      description: "Antacid for indigestion",
      price: 60,
      image: "https://m.media-amazon.com/images/I/61mS7nYrnCL.jpg",
    },
    {
      id: 11,
      name: "Loperamide",
      description: "For diarrhea control",
      price: 90,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/9/GB/ZD/SG/1217045/loperamide-hydrochloride-tablet-ip.jpg",
    },
    {
      id: 12,
      name: "Omeprazole",
      description: "Reduces stomach acid",
      price: 110,
      image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/07/a-packet-of-omeprazole-image-credit-siufaiho-2006.jpg?w=1155&h=1730",
    },
  ],
  "Heart & Blood Pressure": [
    {
      id: 13,
      name: "Amlodipine",
      description: "Treats high blood pressure",
      price: 150,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/PZ/ZT/QK/88793954/amlodipine-tablets-ip-500x500.jpeg",
    },
    {
      id: 14,
      name: "Losartan",
      description: "Blood pressure control",
      price: 170,
      image: "https://cdn.sehat.com.pk/product_images/b/333/Losartan_20s_50mg__51892_zoom.jpg",
    },
    {
      id: 15,
      name: "Atorvastatin",
      description: "Lowers cholesterol levels",
      price: 200,
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438075527/NN/MK/HU/760137/atorvastatin-calcium-40-mg-tablet.jpg",
    },
  ],
};

function Catalog() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    cart = [],
    addToCart = () => {},
    removeFromCart = () => {},
  } = useOutletContext() || {};

  const getQuantityInCart = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const handleLoginRedirect = () => {
    navigate("/login", {
      state: { message: "Please log in to continue" },
    });
  };

  if (!user) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-danger">Please log in to view the catalog.</h2>
        <button className="btn btn-primary mt-3" onClick={handleLoginRedirect}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="main-content">
        <h1 className="text-light text-center mb-4">
          Medicine Catalog for {user.username}
        </h1>

        {/* Dropdown Filter */}
        <div className="text-center mb-4">
          <select
            className="form-select w-50 mx-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value=""> Select a Category</option>
            {Object.keys(categorizedMedicines).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="category-section">
            <h2 className="text-info mb-3">{selectedCategory}</h2>
            <div className="medicine-grid">
              {categorizedMedicines[selectedCategory].map((medicine) => {
                const quantity = getQuantityInCart(medicine.id);
                return (
                  <div key={medicine.id} className="medicine-card">
                    <img src={medicine.image} alt={medicine.name} />
                    <h3>{medicine.name}</h3>
                    <p>{medicine.description}</p>
                    <div className="price">₹{medicine.price}</div>
                    {quantity > 0 ? (
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn minus"
                          onClick={() => removeFromCart(medicine.id)}
                        >
                          -
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button
                          className="quantity-btn plus"
                          onClick={() => addToCart(medicine)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(medicine)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Catalog;

