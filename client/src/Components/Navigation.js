import React from 'react';
import { ChevronRight } from 'lucide-react';

const NavigationItem = ({ title, isLast }) => {
  return (
    <li className="flex items-center">
      <a
        href="#"
        className={`text-sm ${
          isLast ? 'text-darkorange' : 'text-darkorange underline hover:underline-offset-2'
        }`}
      >
        {title}
      </a>
      {!isLast && (
        <ChevronRight className="h-4 w-4 text-darkorange mx-2" />
      )}
    </li>
  );
};

const Navigation = ({ items }) => {
  return (
    <nav className="bg-customBg
     p-4 border-b border-gray-700">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <NavigationItem
            key={index}
            title={item}
            isLast={index === items.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
};

export default Navigation;