import React from 'react'
import { ColorContext } from '../ColorStorage';

const ShowArea = (props) => {
  const { color } = React.useContext(ColorContext);
  return (
    <>
      <div
        style={{ 'background-color': color, width: '100px', height: '100px' }}
      ></div>
      {color}
    </>
  );
};

export default ShowArea;
