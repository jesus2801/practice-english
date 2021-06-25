import React from 'react';

import { InputProps } from '@interfaces/props.interfaces';

import { InputStyles } from './styles';

const Input = ({ icon, addRef, type, ...rest }: InputProps) => {
  return (
    <InputStyles>
      {icon ? (
        <>
          {icon}
          <input
            type={type || 'text'}
            ref={addRef}
            className="icon"
            {...rest}
          />
        </>
      ) : (
        <input type={type || 'text'} ref={addRef} {...rest} />
      )}
      <div></div>
    </InputStyles>
  );
};

export default Input;
