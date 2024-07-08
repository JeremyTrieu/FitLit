import React from 'react';

export const Button = (props) => {
    const {func} = props;
  return (
    <button onClick={func} className='begin-button'>Formulate</button>
  )
};
