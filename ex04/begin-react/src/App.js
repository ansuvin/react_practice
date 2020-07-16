import React from 'react';
import Hello from './Hello';    //ㄹ
import './App.css';

function App() {
  const name ='react';
  const style={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize:24,
    padding: '1rem'
  }
  return(
  <>   {/*이것은 react-fregment*/}
      <Hello 
        //이러한 주석은 열리는 태그 내부에서 작성 가능!
      />
      <div style={style}> {name}</div>    {/* 이것은 주석  중괄호 필수! */}
      <div className="gray-box"></div>
    </>   
  );
}

export default App;
