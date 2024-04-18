"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    'slide1.jpg',
    'banner.jpg',
    'techbg.jpg',
    'slide1.jpg',
    'banner.jpg',
    'techbg.jpg',
];

const Gallery = () => {  
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="image-wrapper"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image width={500} height={500} src={`/${image}`} alt={`Image ${index + 1}`} />
        </motion.div>
      ))}
      <style jsx>{`
        .gallery-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .image-wrapper {
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
