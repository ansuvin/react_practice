import React from 'react';
import User from './User';
import ErrorBoundary from './ErropBoundary';

function App() {
  const user ={
    id: 1,
    username: 'velopert'
  }

  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
