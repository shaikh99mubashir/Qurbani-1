import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/services/categorySlice";
import { UPLOADS_URL } from "../../constants/api";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const {
    data: mainCategories = [],
    isLoading,
    isError,
  } = useGetCategoriesQuery({
    type: "main",
  });

  // Reinitialize AOS after data loads
  useEffect(() => {
    if (mainCategories && mainCategories.length > 0) {
      // Reinitialize AOS after the component renders with data
      if (window.AOS) {
        window.AOS.refresh();
      }
    }
  }, [mainCategories]);

  // Handle category click with all necessary data
  const handleCategoryClick = (category) => {
    const categoryData = {
      id: category._id,
      name: category.name,
      image: category.image,
      description: category.description
    };
    
    // Encode the data as URL parameters
    const encodedData = encodeURIComponent(JSON.stringify(categoryData));
    
    // Navigate with category data
    navigate(`/category/${encodeURIComponent(category.name)}?data=${encodedData}`);
  };

  if (isLoading) return <div>Loading categories...</div>;
  if (isError) return <div>Failed to load categories.</div>;
  return (
    <div className="about" data-aos="fade-up">
      <div className="container">
        <h3>
          Shop by <span>Categories</span>
        </h3>
        <p style={{ marginTop: 0, marginBottom: "2.5rem", color: "#444" }}>
          Freshest meats and much more!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3rem",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          {mainCategories.filter(cat => cat.available === true).map((cat, idx) => {
            // Construct the full image URL
            const imageUrl = cat.image
              ? `${UPLOADS_URL}uploads/${cat.image}`
              : "/public/images/goat.png";
            console.log("cat", cat);
            
            return (
              <div
                key={cat._id || idx}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 140,
                  cursor: "pointer",
                }}
                data-aos="fade-up"
                data-aos-delay={idx * 100} // Stagger the animations
              >
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={cat.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      console.log("Image failed to load:", imageUrl);
                      e.target.src = "/public/images/cow.png";
                    }}
                  />
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "1.15rem",
                    color: "#181818",
                    textAlign: "center",
                    marginTop: 0,
                  }}
                >
                  {cat.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
