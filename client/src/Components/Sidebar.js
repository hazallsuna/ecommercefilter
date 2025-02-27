import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    brands: [],
    sizes: [],
    activities: [],
  });
  const [openSections, setOpenSections] = useState({});
  const [showDiscounts, setShowDiscounts] = useState(false);

  const toggleSelection = (item, category) => {
    setFilters(prev => {
      const updatedCategory = prev[category].includes(item)
        ? prev[category].filter(i => i !== item)
        : [...prev[category], item];
      const newFilters = { ...prev, [category]: updatedCategory };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderCheckbox = (item, category) => (
    <li key={item} className="flex items-center cursor-pointer" 
        onClick={() => toggleSelection(item, category)}>
      <div className="w-4 h-4 border border-darkorange rounded mr-1 flex items-center justify-center">
        {(filters[category].includes(item) || (category === 'categories' && item === 'Men')) && 
          <FaCheck className="text-darkorange text-xs" />}
      </div>
      <span className="text-xs">{item}</span>
    </li>
  );

  const renderSection = (title, items, category) => (
    <li className="mb-2">
      <h3 className="font-bold mb-1 flex items-center justify-between text-sm cursor-pointer"
          onClick={() => toggleSection(title)}>
        {title} <IoIosArrowDown className={`text-darkorange transform ${openSections[title] ? 'rotate-180' : ''}`} />
      </h3>
      {openSections[title] && (
        <ul className="pl-2 space-y-1">
          {items.map(item => renderCheckbox(item, category))}
        </ul>
      )}
    </li>
  );

  const resetAll = () => {
    const newFilters = {
      categories: [],
      colors: [],
      brands: [],
      sizes: [],
      activities: [],
    };
    setFilters(newFilters);
    setShowDiscounts(false);
    onFilterChange(newFilters);
  };

  return (
    <aside className="bg-customBg text-white w-64 h-[calc(100vh-4rem)] flex flex-col border-l border-white/10">
      <div className="flex-grow overflow-y-auto">
        <div className="p-3">
          <nav>
            <ul>
              {renderSection('Categories', ['Men', 'Women', 'Kids'], 'categories')}
              {renderSection('Color', ['black', 'white', 'yellow', 'red', 'purple', 'gray', 'orange', 'green', 'pink'], 'colors')}
              {renderSection('Brand', ['Nike', 'Adidas', 'Puma', 'New Balance', 'Crocs', 'UGG', 'Under Armour'], 'brands')}
              {renderSection('Size', ['40', '41.5', '42', '42.5', '43', '43.5', '44', '44.5', '45', '45.5', '46'], 'sizes')}
              {renderSection('Activity', ['Running', 'Soccer', 'Tennis', 'Basketball', 'Golf', 'Business', 'Hiking', 'Casual'], 'activities')}
            </ul>
          </nav>
        </div>
      </div>
      <div className="p-3 bg-customBg">
        <div className="flex items-center cursor-pointer mb-4" onClick={() => setShowDiscounts(!showDiscounts)}>
          <div className="w-4 h-4 border border-darkorange rounded mr-1 flex items-center justify-center">
            {showDiscounts && <FaCheck className="text-darkorange text-xs" />}
          </div>
          <span className="text-sm text-darkorange mt-0">Show Discounts</span>
        </div>
        <button
          className="text-darkorange text-sm underline hover:underline-offset-2"
          onClick={resetAll}
        >
          Reset All
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;