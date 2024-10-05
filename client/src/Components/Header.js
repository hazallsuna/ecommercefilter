import {React, useState}from 'react';
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { RiShoppingCartFill } from "react-icons/ri";
import { GiConverseShoe } from "react-icons/gi";
import { TbSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header = ({onSearch}) => {
  const [query, setQuery] = useState('');
  const[{cartItems}]= useStateValue();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    onSearch(query);
  };
  
  

  return (
    <header className="bg-customBg text-white h-16 border-b border-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
      <Link to="/products">
          <div className="text-darkorange font-bold text-xl flex items-center">
            <GiConverseShoe className="h-8 w-8 mr-2" />
            <span>Shop Page</span>
          </div>
        </Link>
        
       
        <div className="flex-1 mx-8 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-cardgray text-white rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-700 "
              value={query}
              onChange={handleSearch}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full border-2 border-darkorange hover:bg-orange-300 transition-colors" 
             onClick={handleClick}>
              <TbSearch className="text-darkorange h-6 w-6" />
            </button>
          </div>
        </div>

      
        <div className="flex space-x-6">
          <div className="relative p-2 border-2 border-darkorange">
            <FaHeart className="text-darkorange text-xl h-6 w-6" />
          </div>

          <div className="relative p-2 border-2 border-darkorange ">
            <RiShoppingCartFill className="text-darkorange text-xl h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-darkorange rounded-full text-xs text-white px-1">
              {cartItems.length}
            </span>
          </div>

          <div className="relative p-2 border-2 border-darkorange ">
            <FaUser className="text-darkorange text-xl h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
