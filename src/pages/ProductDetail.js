import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems, selectCartTotal } from "../redux/slices/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { UPLOADS_URL } from "../constants/api";
import Header from "../components/header";
import Footer from "../components/footer";
import QuantitySelector from "../components/QuantitySelector";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [product, setProduct] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Get product data from localStorage
    const productData = localStorage.getItem("selectedProduct");
    const categoryDataFromStorage = localStorage.getItem("categoryData");

    if (productData) {
      try {
        setProduct(JSON.parse(productData));
      } catch (error) {
        console.error("Error parsing product data:", error);
      }
    }

    if (categoryDataFromStorage) {
      try {
        setCategoryData(JSON.parse(categoryDataFromStorage));
      } catch (error) {
        console.error("Error parsing category data:", error);
      }
    }

    setLoading(false);
  }, [productId]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCategoryClick = () => {
    // Navigate back to category page with the stored data
    if (categoryData) {
      const encodedData = encodeURIComponent(JSON.stringify(categoryData));
      navigate(`/category/${categoryData.name}?data=${encodedData}`);
    } else {
      navigate(-1);
    }
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id || product.id,
      name: product.name,
      price: product.price,
      image: product.image ? `${UPLOADS_URL}uploads/${product.image}` : "/public/images/cow.png",
      qty: qty
    }));
    setShowToast(true);
  };

  const handleViewCart = () => {
    setShowToast(false);
    navigate('/cart');
  };

  const handleContinueShopping = () => {
    setShowToast(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const imageUrl = product.image
    ? `${UPLOADS_URL}uploads/${product.image}`
    : "/public/images/cow.png";

  const inCart = cartItems.some(item => (item.id === (product._id || product.id)));

  return (
    <>
      <Header />
      <div className="product-detail-page">
        <div className="product-detail-container">
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-navigation">
            <span className="breadcrumb-link" onClick={handleHomeClick}>
              Home
            </span>
            <span className="breadcrumb-separator"> / </span>
            <span className="breadcrumb-link" onClick={handleCategoryClick}>
              {categoryData?.name || "Category"}
            </span>
            <span className="breadcrumb-separator"> / </span>
            <span className="breadcrumb-current">{product.name}</span>
          </div>

          {/* Product Detail Content */}
          <div className="product-detail-content">
            {/* Product Image */}
            <div className="product-detail-image-section">
              <img
                src={imageUrl}
                alt={product.name}
                className="product-detail-image"
                onError={(e) => {
                  e.target.src = "/public/images/cow.png";
                }}
              />
            </div>

            {/* Product Information */}
            <div className="product-detail-info-section">
              <h1 className="product-detail-title">{product.name}</h1>

              <div className="product-detail-meta">
                {product.keywords?.join(" | ")}
              </div>

              <div className="product-detail-attributes">
                <span className="attribute-item">
                  <span className="attribute-icon">🧊</span>
                  {product.numberOfUnits}
                </span>
                <span className="attribute-item">
                  <span className="attribute-icon">🍗</span>
                  {product.numberOfPieces}
                </span>
                {/* <span className="attribute-item">
                  <span className="attribute-icon">🍽️</span>
                  Serves 4
                </span> */}
              </div>

              <div className="product-detail-description-container">
                <div className={`product-detail-description ${isDescriptionExpanded ? 'expanded' : 'collapsed'}`}>
                  {product.description}
                </div>
                {product.description && product.description.length > 100 && (
                  <div className="read-more-btn" onClick={toggleDescription}>
                    {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                  </div>
                )}
              </div>

              <div className="product-detail-pricing-container">
                <div className="product-detail-pricing">
                  <div className="price-row">
                    <span className="current-price">Rs{product.price}</span>
                    {product.mrpPrice && (
                      <span className="mrp-price">Rs{product.mrpPrice}</span>
                    )}
                    {product.offPercent > 0 && (
                      <span className="product-detail-card-off">
                        {product.offPercent}% off
                      </span>
                    )}
                  </div>
                </div>
                {/* Quantity Selector */}
                <QuantitySelector value={qty} onChange={setQty} min={1} disabled={inCart} />
                {/* Add to Cart Button */}
                <button
                  className={`add-to-cart-button${inCart ? ' added' : ''}`}
                  onClick={handleAddToCart}
                  disabled={inCart}
                >
                  {inCart ? 'Added' : (<><FaPlus /> Add</>)}
                </button>
              </div>
              {/* <div className="delivery-info">
                <div className="delivery-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="16" fill="#ff9800" />
                    <rect
                      x="7"
                      y="15"
                      width="6"
                      height="2"
                      rx="1"
                      fill="#fff"
                      opacity="0.7"
                    />
                    <rect
                      x="7"
                      y="19"
                      width="4"
                      height="2"
                      rx="1"
                      fill="#fff"
                      opacity="0.7"
                    />
                    <rect
                      x="7"
                      y="11"
                      width="8"
                      height="2"
                      rx="1"
                      fill="#fff"
                      opacity="0.7"
                    />
                    <path d="M18 22l4-8h-3l2-6-6 8h3l-2 6z" fill="#fff" />
                  </svg>
                </div>
                <span className="delivery-text">Today in 30 mins</span>
              </div> */}
            </div>
          </div>

          {/* Toast/Snackbar for Add to Cart */}
          {showToast && (
            <div className="cart-toast">
              <div className="cart-toast-msg">Added to cart!</div>
              <div className="cart-toast-summary">Cart: {cartItems.length} item(s), Rs{cartTotal}</div>
              <div className="cart-toast-actions">
                <button className="cart-toast-btn" onClick={handleViewCart}>View Cart</button>
                <button className="cart-toast-btn" onClick={handleContinueShopping}>Continue Shopping</button>
              </div>
            </div>
          )}

          {/* Info Section (3 columns) - moved below detail section */}
          <div className="product-detail-info-section-3col">
            <div className="info-col">
              <div className="info-underline"></div>
              <div className="info-title">We will sell only the meat that we would eat ourselves.</div>
              <div className="info-desc">At Licious, we're big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we're extremely picky. Every single product is handpicked by a team with years of experience.</div>
            </div>
            <div className="info-col">
              <div className="info-underline"></div>
              <div className="info-title">If it's not fresh, we won't sell it</div>
              <div className="info-desc">For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 4°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it's out for delivery, we keep it chilled right up to your doorstep.Did we mention that we're obsessed?</div>
            </div>
            <div className="info-col">
              <div className="info-underline"></div>
              <div className="info-title">We will charge only for what you buy</div>
              <div className="info-desc">Doesn't everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren't fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
