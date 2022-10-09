import React from 'react';
const App = () => {
  // const url= "/api1";
  // fetch(url).then(res => res.json()).then(res => console.log(res));
  const url = "https://query.asilu.com/today/list";
  fetch(url)
  .then((res) => res.json())
  .then((res) => console.log(res));
  return (
    <>
      你好
    </>
  );
}

export default App;