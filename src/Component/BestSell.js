import React from 'react';
import '../Style/BestSell.css'; // Importing CSS file for styling

const BestSell = () => {
  const products = [
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152038/logo1_p6mp1b.webp",
      name: "Ceiling Fan with Modern Design",
      price: "$100", // Giá sản phẩm
      description: "Ceiling fan with modern design.",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152020/logo17_hg2ojk.webp",
      name: "Elegant Wall-Mounted Fan",
      price: "$120", // Giá sản phẩm
      description: "Elegant wall-mounted fan.",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152015/logo23_o87wuf.webp",
      name: "Stylish Table Fan",
      price: "$80", // Giá sản phẩm
      description: "Stylish table fan for home use.",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152003/logo38_ssswow.webp",
      name: "Energy-Efficient Ceiling Fan",
      price: "$150", // Giá sản phẩm
      description: "Energy-efficient ceiling fan.",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151946/pe10_asgzna.webp",
      name: "Decorative Fan with Light",
      price: "$90", // Giá sản phẩm
      description: "Decorative fan with light.",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152031/logo10_yqxcpo.webp",
      name: "Compact Portable Fan",
      price: "$50", // Giá sản phẩm
      description: "Compact and powerful portable fan.",
    }
  ];

  return (
    <div className="best-sell">
      <h2>Best Sellers</h2>
      <div className="image-gallery">
        {products.map((product, index) => (
          <div key={index} className="image-item">
            <img src={product.src} alt={`Best Seller ${index + 1}`} className="img-fluid" />
            <div className="overlay">Best Seller</div> {/* Thay đổi chữ thành "Best Seller" */}
            <p className="product-name">{product.name}</p> {/* Hiển thị tên sản phẩm */}
            <p className="product-price">{product.price}</p> {/* Hiển thị giá sản phẩm */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSell;
