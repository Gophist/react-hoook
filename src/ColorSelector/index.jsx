import React, { useContext } from 'react';
import { ColorContext } from '../ColorStorage';

const ColorSelector = (params) => {
  const { dispatch } = useContext(ColorContext);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'update-color', color: 'red' });
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'update-color', color: 'yellow' });
        }}
      >
        yellow
      </button>
    </>
  );
};

export default ColorSelector;
