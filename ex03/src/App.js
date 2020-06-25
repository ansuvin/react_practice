import React from 'react';
import './App.css';

function App() {
  return (
    <form>
      ID : <input
        type="text"
        name="user_id"
        value="userID"
      />
      PassWord : <input
        type="password"
        name="user_pw"
        value="userPW"
      />
    </form>
  );
}

export default App;
