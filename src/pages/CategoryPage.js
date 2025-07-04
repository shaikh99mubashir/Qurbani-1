import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems, selectCartTotal } from '../redux/slices/cartSlice';
import { useGetCategoriesQuery } from '../redux/services/categorySlice';
import { UPLOADS_URL } from '../constants/api';
import { FaPlus, } from 'react-icons/fa';
import './CategoryPage.css';
import Header from '../components/header';
import Footer from '../components/footer';
import QuantitySelector from '../components/QuantitySelector';

// ProductCard component as per design
const ProductCard = ({ product, onClick, disabled, isAvailable }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const imageUrl = product.image
    ? `${UPLOADS_URL}uploads/${product.image}`
    : '/public/images/cow.png';
  const inCart = cartItems.some(item => (item.id === (product._id || product.id)));
  const available = product.available !== false;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!available) return;
    dispatch(addToCart({
      id: product._id || product.id,
      name: product.name,
      price: product.price,
      image: product.image ? `${UPLOADS_URL}uploads/${product.image}` : '/public/images/cow.png',
      qty: qty
    }));
    setShowToast(true);
  };

  const handleViewCart = (e) => {
    e.stopPropagation();
    setShowToast(false);
    window.location.href = '/cart';
  };

  const handleContinueShopping = (e) => {
    e.stopPropagation();
    setShowToast(false);
  };

  return (
    <div
      className="product-card-custom"
      onClick={available ? onClick : undefined}
      style={{
        cursor: available ? 'pointer' : 'not-allowed',
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
      }}
    >
      {/* Out of Stock Badge */}
      {!available && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          background: '#222',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          padding: '6px 0',
          zIndex: 3,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          fontSize: 15,
          letterSpacing: 1
        }}>
          Out of Stock
        </div>
      )}
      {/* Image with overlay */}
      <div className="product-card-img-wrap" style={{ position: 'relative' }}>
        <img
          src={imageUrl}
          alt={product.name}
          className="product-card-img"
          style={{
            filter: !available ? 'grayscale(1) brightness(0.85)' : 'none',
            width: '100%',
            height: 180,
            objectFit: 'cover'
          }}
          onError={e => { e.target.src = '/public/images/cow.png'; }}
        />
      </div>
      {/* Product Info */}
      <div className="product-card-info">
        <div className="product-card-title">{product.name}</div>
        <div className="product-card-desc" style={{ color: '#aaa' }}>{product.shortDescription}</div>
        <div className="product-card-details">
          {product.numberOfUnits} {product.numberOfPieces && `| ${product.numberOfPieces}`} {product.serves && `| Serves ${product.serves}`}
        </div>
        <div className="product-card-price-row">
          <span className="product-card-price">Rs{product.price}</span>
          {product.mrpPrice && (
            <span className="product-card-mrp">Rs{product.mrpPrice}</span>
          )}
          {product.offPercent > 0 && (
            <span className="product-card-off">{product.offPercent}% off</span>
          )}
        </div>
      </div>
      {/* Delivery and Add Button */}
      <div className="product-card-bottom-row">
        <span className="product-card-delivery">
          <span className="delivery-icon">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#ff9800"/>
              <rect x="7" y="15" width="6" height="2" rx="1" fill="#fff" opacity="0.7"/>
              <rect x="7" y="19" width="4" height="2" rx="1" fill="#fff" opacity="0.7"/>
              <rect x="7" y="11" width="8" height="2" rx="1" fill="#fff" opacity="0.7"/>
              <path d="M18 22l4-8h-3l2-6-6 8h3l-2 6z" fill="#fff"/>
            </svg>
          </span>
          Today in 30 mins
        </span>
        <QuantitySelector value={qty} onChange={setQty} min={1} disabled={inCart || !available} />
        {available && (
          <button
            className={`product-card-add-btn${inCart ? ' added' : ''}`}
            disabled={!product.available || inCart}
            onClick={handleAddToCart}
          >
            {inCart ? 'Added' : (<><FaPlus style={{ marginLeft: 6 }} /> Add</>)}
          </button>
        )}
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
    </div>
  );
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedSub, setSelectedSub] = useState('All');
  const [categoryData, setCategoryData] = useState(null);

  // Get category data from URL parameters
  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(dataParam));
        setCategoryData(decodedData);
        console.log('Category Data:', decodedData);
      } catch (error) {
        console.error('Error parsing category data:', error);
      }
    }
  }, [searchParams]);

  // Fetch subcategories using parentId
  const { data: subCategories = [], isLoading, isError } = useGetCategoriesQuery({
    parentId: categoryData?.id
  }, {
    skip: !categoryData?.id // Skip query if no parentId
  });

  console.log('Subcategories:', subCategories);
  console.log('Parent ID:', categoryData?.id);

  // Handle home navigation
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProductClick = (product) => {
    // Store product data in localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    // Store category data for breadcrumb navigation
    localStorage.setItem('categoryData', JSON.stringify(categoryData));
    // Navigate to product detail page
    navigate(`/product/${product._id || product.id}`);
  };

  // Extract all products from subcategories
  const getAllProducts = () => {
    const allProducts = [];
    subCategories.forEach(subCategory => {
      if (subCategory.subCategories && subCategory.subCategories.length > 0) {
        allProducts.push(...subCategory.subCategories);
      }
    });
    return allProducts;
  };

  // Get products based on selected subcategory
  const getFilteredProducts = () => {
    if (selectedSub === 'All') {
      return getAllProducts();
    } else {
      const selectedCategory = subCategories.find(sub => sub.name === selectedSub);
      return selectedCategory?.subCategories || [];
    }
  };

  const filteredProducts = getFilteredProducts();

  if (isLoading) return <div>Loading subcategories...</div>;
  if (isError) return <div>Failed to load subcategories.</div>;

  return (
    <>
      <Header />
      <div style={{ background: '#fff8', minHeight: '100vh', padding: '2rem 0', }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem',marginTop:'90px' }}>
        <div style={{ fontSize: 18, color: '#b00' }}>
            <span 
              className="category-home-link"
              onClick={handleHomeClick}
              style={{ 
                cursor: 'pointer', 
                textDecoration: 'underline',
              }}
            >
              Home
            </span> / <span>{categoryData?.name || categoryName}</span>
        </div>
          
          {/* Category Header with Image */}
          {/* <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            {categoryData?.image && (
              <img 
                src={`${UPLOADS_URL}uploads/${categoryData.image}`}
                alt={categoryName}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = '/public/images/cow.png';
                }}
              />
            )}
            <div>
        <h1 style={{ fontWeight: 700 }}>{categoryName}</h1>
              {categoryData?.description && (
                <p style={{ color: '#666', marginTop: '0.5rem' }}>{categoryData.description}</p>
              )}
            </div>
          </div> */}

        <div style={{
            background: '#d8363d',
          color: '#fff',
          borderRadius: 20,
          padding: '1rem 2rem',
          margin: '2rem 0',
          fontWeight: 600,
          fontSize: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span role="img" aria-label="megaphone" style={{ marginRight: 10 }}>📣</span>
            {categoryData?.description || 'Tested & inspected by safety experts'}
        </div>
          
        <div style={{
          display: 'flex',
          gap: '2rem',
          background: '#fff0f6',
          borderRadius: 20,
          padding: '1.5rem 1rem 0.5rem 1rem',
          marginBottom: '2rem',
          overflowX: 'auto',
        }}>
            {/* All option */}
            <div
              onClick={() => setSelectedSub('All')}
              style={{
                textAlign: 'center',
                minWidth: 120,
                cursor: 'pointer',
                borderBottom: selectedSub === 'All' ? '3px solid #d8363d' : '3px solid transparent',
                paddingBottom: 10,
                transition: 'border-bottom 0.2s',
              }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                margin: '0 auto 10px auto', background: '#fff',
                border: selectedSub === 'All' ? '2px solid #d8363d' : '2px solid transparent',
                transition: 'border 0.2s',
              }}>
                <img 
                  src={categoryData?.image ? `${UPLOADS_URL}uploads/${categoryData.image}` : '/public/images/cow.png'} 
                  alt="All" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ fontWeight: 500 }}>All</div>
            </div>

            {/* Subcategories from API */}
            {subCategories.map((sub, i) => {
              const imageUrl = sub.image ? `${UPLOADS_URL}uploads/${sub.image}` : '/public/images/cow.png';
              
              return (
                <div
                  key={sub._id || i}
                  onClick={() => setSelectedSub(sub.name)}
                  style={{
                    textAlign: 'center',
                    minWidth: 120,
                    cursor: 'pointer',
                    borderBottom: selectedSub === sub.name ? '3px solid #d8363d' : '3px solid transparent',
                    paddingBottom: 10,
                    transition: 'border-bottom 0.2s',
                  }}
                >
        <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    margin: '0 auto 10px auto', background: '#fff',
                    border: selectedSub === sub.name ? '2px solid #d8363d' : '2px solid transparent',
                    transition: 'border 0.2s',
                  }}>
                    <img 
                      src={imageUrl} 
                      alt={sub.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = '/public/images/cow.png';
                      }}
                    />
                  </div>
                  <div style={{ fontWeight: 500 }}>{sub.name}</div>
                </div>
              );
            })}
          </div>
          
          <div style={{ fontWeight: 500, fontSize: 18, margin: '2rem 0 1rem 0' }}>{filteredProducts.length} Items available</div>
          <div className="product-card-grid">
            {filteredProducts.map((prod, idx) => (
              <ProductCard
                key={prod._id || idx}
                product={prod}
                onClick={() => prod.available !== false && handleProductClick(prod)}
                disabled={prod.available === false}
                isAvailable={prod.available !== false}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 