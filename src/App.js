import React, { useState } from 'react';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { coffeeData } from './data/coffeeData';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCoffees = activeFilter === 'available' 
    ? coffeeData.filter(coffee => coffee.available)
    : coffeeData;

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="header-content">
            <h1 className="title">Our Collection</h1>
            <p className="subtitle">
              Introducing our Coffee Collection, a selection of unique coffees from different 
              roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Products
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'available' ? 'active' : ''}`}
                onClick={() => setActiveFilter('available')}
              >
                Available Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="coffee-grid">
          {filteredCoffees.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;