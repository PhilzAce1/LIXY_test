import React from 'react';
export default function Table({ tdata }) {
  const body = tdata.map((value, index) => {
    const innerBody = value.map((innerValue, innerIndex) => {
      if (innerIndex === 0 && index === 0) {
        return <td key={innerIndex}></td>;
      }
      if (index === 0) {
        return <th key={innerIndex}>{innerValue}</th>;
      }
      return <td key={innerIndex}>{innerValue}</td>;
    });
    if (index === 0) {
      return (
        <thead key={index}>
          <tr id={index}>{innerBody}</tr>
        </thead>
      );
    }
    return (
      <tbody key={index}>
        <tr id={index}>{innerBody}</tr>
      </tbody>
    );
  });

  return <table>{body}</table>;
}
