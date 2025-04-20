import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import Cart from './Cart';
import './Header.css';
import { UserContext } from './UserContext';
import { FaListAlt } from 'react-icons/fa';
const Header = ({
  cartItemCount,
  setShowCart,
  showCart,
  cart = [],
  onRemove = () => {},
  onIncrease = () => {},
}) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const toggleCart = () => setShowCart(!showCart);

  // Updated logic: fallback to "home" when no user
  const userPath = user?.username || 'home';

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login', {
      state: { message: 'You have been logged out.' },
    });
  };

  const handleCatalogClick = () => {
    if (user) {
      navigate(`/catalog/${user.username}`);
    } else {
      navigate('/login', {
        state: { message: 'Please log in to continue' },
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">MediBook</div>
      <nav className="nav">
        <Link to={`/${userPath}`}>
          <FaHome /> Home
        </Link>
        {/* <Link to={`/${userPath}`}>
          <FaHome /> Catalog
        </Link> */}
      <button className="nav-link-btn" onClick={handleCatalogClick}>
          <FaListAlt/> Catalog
        </button> 

        {!user ? (
          <>
            <Link to="/login">
              <FaUser /> Login
            </Link>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </>
        ) : (
          <button className="cart-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        )}

        <button className="cart-btn" onClick={toggleCart}>
          <FaShoppingCart /> Cart ({cartItemCount})
        </button>
      </nav>

      {showCart && (
        <Cart
          cart={cart}
          onClose={toggleCart}
          onRemove={onRemove}
          onIncrease={onIncrease}
        />
      )}
    </header>
  );
};

export default Header;
