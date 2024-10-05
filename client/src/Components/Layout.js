import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

const Layout = ({ children, onFilterChange, onSearch}) => {
  const navigationItems = ['Home', 'Shoes', 'Men'];

  return (
    <div className="flex flex-col h-screen bg-customBg">
      <Header onSearch={onSearch}/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onFilterChange={onFilterChange} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navigation items={navigationItems} />   
          <main className="flex-1 p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;