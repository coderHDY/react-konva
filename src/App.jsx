import React, { useState } from 'react';
import { useEffect } from 'react';


// head -> {a: 2} -> { callback: () => {} } -> {b: 2} -> {c: 2}

const App = () => {
  const [ a, setA ] = useState(2);


  const [ b, setB ] = useState(2);
  const [ c, setC ] = useState(2);


  console.log("刷新");
  return (
    <>
      <div>{a}</div>
      <div>{b}</div>
      <div>{c}</div>
      <button onClick={change}>change</button>
    </>
  );
}

export default App;