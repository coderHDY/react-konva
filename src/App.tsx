import React, { useState, useRef, useMemo } from 'react';
const useReactive = <T extends {}>(obj: T): T => {
  const [ , update ] = useState({});
  const o = useRef(obj);
  const proxy = useMemo(() => {
    return new Proxy<T>(o.current, {
    set(target, key, val) {
      Reflect.set(target, key, val);
      update({})
      return true;
    }
  })}, []);
  return proxy;
}

const App = () => {
  const account = useReactive({
    name: '',
    age: 0
  });
  return (
    <div>
      <div>name: {account.name}</div>
      <div>age: {account.age}</div>
      <div><input type="text" onChange={(e) => account.name = e.target.value}/></div>
      <div><input type="number" onChange={(e) => account.age = +e.target.value}/></div>
    </div>
  );
};

export default App;