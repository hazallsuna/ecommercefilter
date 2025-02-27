import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from "./Components/Layout";
import ProductCardGrid from "./Components/ProductCardGrid";
import axios from 'axios';
import { StateProvider } from './StateProvider';
import { initialState, reducer } from './reducer';

function App() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const[query,setQuery]= useState('');

 
  useEffect(() => {
    fetchProducts();
  }, [products,searchParams,query]);
  
  const fetchProducts = async () => {
    try {
      const url = new URL('https://ecommercefilter-ebdu5q0f7-hazals-projects-53a4fddc.vercel.app/products');
      searchParams.forEach((value, key) => {
        url.searchParams.append(key, value);
      });
      if (query) {
        url.searchParams.append('q', query);
      }
      

      const response = await axios.get(url.toString());
      setProducts(response.data);
    } catch (error) {
      console.error("Could not fetch products:", error);
    }
  };

  const handleFilterChange = (filters) => {
    Object.entries(filters).forEach(([key, value]) => {
      if (value.length > 0) {
        searchParams.set(key, value.join(','));
      } else {
        searchParams.delete(key);
      }
    });
    setSearchParams(searchParams);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  }
  

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout onFilterChange={handleFilterChange} onSearch={handleSearch}>
        <ProductCardGrid products={products} />
      </Layout>
      </StateProvider>
    
  );
}

export default App;