import React, { useState, useMemo } from 'react';
import './HeavyComputationComponent.css';

const HeavyComputationComponent = ({ items, filterTerm }) => {
  const [term, setTerm] = useState(filterTerm);

  const filteredItems = useMemo(() => {
    console.log('Performing expensive computation...');
    return items.filter(item => item.toLowerCase().includes(term.toLowerCase()));
  }, [items, term]);

  return (
    <div className="heavy-computation">
      <h2>Filtered Items</h2>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Filter items" />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
