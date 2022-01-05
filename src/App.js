import React from 'react';
import './style.css';

import ShowArea from './ShowArea';
import ColorSelector from './ColorSelector';
import { Color } from './ColorStorage';

export default function App() {
  return (
    <div>
      <p>用 useContext + useReducer 替代 redux</p>
        <Color>
          <ColorSelector />
          <ShowArea />
        </Color>
    </div>
  );
}
