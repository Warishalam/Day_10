import React from 'react';
import ContactList from './components/ContactList/ContactList';
import PostsList from './components/PostsList/PostsList';
import HeavyComputationComponent from './components/HeavyComputationComponent/HeavyComputationComponent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ContactList />
      <PostsList />
      <HeavyComputationComponent
        items={['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Peach']}
        filterTerm=""
      />
    </div>
  );
};

export default App;

