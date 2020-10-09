import React from 'react';
import Table from './components/Table';
import { genArr, genPrimeNumber } from './helpers';

function App() {
  const primeNumbers = genPrimeNumber(10);
  const resArr = genArr(primeNumbers);
  return (
    <div className="App">
      <h1>Akuagwu Philemon's Test</h1>
      <Table tdata={resArr} />
    </div>
  );
}

export default App;
