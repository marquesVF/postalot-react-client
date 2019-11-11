import React from 'react';
import './App.css';
import PostListContainer from './components/posts';

const App: React.FC = () => {
  return (
    <div className="App">
      <PostListContainer />
    </div>
  );
}

export default App;
