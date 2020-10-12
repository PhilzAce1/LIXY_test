import React, { useState } from 'react';
import Table from './components/Table';
import { genArr, genPrimeNumber } from './helpers';

function App() {
  const primeNumbers = genPrimeNumber(10);
  const resArr = genArr(primeNumbers);
  const [resArrData, setResArrData] = useState(resArr);
  const [inputData, setInputData] = useState('');
  function onSubmit(e) {
    e.preventDefault();
    const number = parseInt(inputData);

    if (Number.isNaN(number) || number === undefined || number <= 1) {
      return;
    }
    const generatedArray = genArr(genPrimeNumber(number));
    setResArrData(generatedArray);
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="setnumber"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Akuagwu Philemon's Test</h1>
      <Table tdata={resArrData} />
    </div>
  );
}

export default App;
