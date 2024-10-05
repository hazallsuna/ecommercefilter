import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const ProductCard = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const [,dispatch]= useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      item:product,
    });
  };

  return (
    <div className="bg-cardgray p-4 rounded-lg w-64">
      <div className="relative">
        <div className="bg-transparent"/>
        <img 
          src={product.images[selectedImageIndex].url}
          alt={product.name} 
          className="w-full h-48 object-cover mb-4"
        />
        <Heart className="absolute top-2 right-2 text-orange-500" size={24} />
      </div>
      <div className="mt-4">
        <h2 className="text-white text-lg font-semibold">{product.name}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm text-gray-400">Sizes: {product.sizes.join('-')}</div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer ${index === selectedImageIndex ? 'border-orange-500' : 'border-gray-400'}`}
                style={{ backgroundColor: image.color }}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-orange-500 font-bold">${product.price}</span>
          <button className="bg-orange-500 text-white px-3 py-1 rounded-md flex items-center hover:bg-orange-400"
          onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;