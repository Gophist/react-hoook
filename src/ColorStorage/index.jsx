import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({});

// reducer
const updatedColor = 'update-color';
const reducer = (state, action) => {
  switch (action.type) {
    case updatedColor:
      return action.color;
    default:
      return state;
  }
};

/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有子组件都可以通过调用 ColorContext 访问到 value
 */
export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, 'blue');
  return (
    <div>
      <ColorContext.provider value={{ color, dispatch }}>
        {props.children}
      </ColorContext.provider>
    </div>
  );
};
