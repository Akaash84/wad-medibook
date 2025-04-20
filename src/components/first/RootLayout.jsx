// import React, { useState } from 'react';
// import { Outlet, useLocation, useParams } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import Cart from './Cart';
// import './RootLayout.css';
// function RootLayout() {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const addToCart = (medicine) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === medicine.id);
//       return existing
//         ? prev.map((item) =>
//             item.id === medicine.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         : [...prev, { ...medicine, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const increaseQuantity = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   return (
//     <div>
      
//       <Header
//         cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
//         setShowCart={setShowCart}
//         showCart={showCart}
//         cart={cart}
//         onRemove={removeFromCart}
//         onIncrease={increaseQuantity}
//       />

//       <div style={{ minHeight: '100vh' }} className="container my-5">
//         <Outlet context={{ cart, addToCart, removeFromCart, increaseQuantity }} />
//       </div>

//       {showCart && (
//         <Cart
//           cart={cart}
//           onClose={() => setShowCart(false)}
//           onRemove={removeFromCart}
//           onIncrease={increaseQuantity}
//         />
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default RootLayout;

// RootLayout.jsx
import React, { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import Cart from './Cart';
import Cart from './Cart';
import './RootLayout.css';

function RootLayout() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (medicine) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === medicine.id);
      return existing
        ? prev.map((item) =>
            item.id === medicine.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...medicine, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div className="page-wrapper">
      <Header
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setShowCart={setShowCart}
        showCart={showCart}
        cart={cart}
        onRemove={removeFromCart}
        onIncrease={increaseQuantity}
      />

      <div className="content-area container my-5">
        <Outlet context={{ cart, addToCart, removeFromCart, increaseQuantity }} />
      </div>

      <Footer />
    </div>
  );
}

export default RootLayout;

