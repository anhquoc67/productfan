import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152039/ceil-decor_s7jlby.jpg',
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152270/ceiling-fan-decor-5_dqmiem.webp', // First background image
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151968/ourfan_yxwvjr.webp'  // Second background image
  ];

  // Change background every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 2000); // 1000ms = 1 second

    return () => clearInterval(intervalId); // Clear interval when component unmounts
  }, [backgroundImages.length]);

  const images = [
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152038/logo1_p6mp1b.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152020/logo17_hg2ojk.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152015/logo23_o87wuf.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152003/logo38_ssswow.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729151946/pe10_asgzna.webp",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729152031/logo10_yqxcpo.webp"
  ];

  const handleLearnMore = () => {
    window.location.href = '/BestSell';
  };

  return (
    <div>
      {/* Rotating Background Images */}
      <div 
        style={{ 
          backgroundImage: `url(${backgroundImages[currentImage]})`, // Switch background based on state
          
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '650px',
          width: '100%',
          position: 'relative',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'background-image 4s ease-in-out' // Smooth transition effect
        }}
      >
        {/* Text over background */}
        <h1 style={{ 
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' 
        }}>
          New 2024
        </h1>
      </div>

      {/* Banner Content Below the Background Image */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px', flexWrap: 'wrap' }}>
        {/* Carousel Section */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '350px', margin: '10px' }}>
          <div className="carousel-inner" style={{ maxHeight: '350px' }}>
            {images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                  style={{ objectFit: 'cover', height: '250px', width: '350px' }} // Fixed size
                />
              </div>
            ))}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(255, 0, 0, 0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              Best Seller
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Text Section */}
        <div style={{ marginLeft: '20px', maxWidth: '300px', flexGrow: 1 }}>
          <h3>Additional Information</h3>
          <p className="text-black mt-3">
            Fanimation fans are the perfect fusion of beauty and functionality. With designs for every style and technology-driven controls for your convenience, Fanimation fans inspire your home. They integrate into any space and allow you to make a statement that is all your own.
          </p>
          <button onClick={handleLearnMore} style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
