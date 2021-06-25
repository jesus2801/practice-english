import React from 'react';

import { SvgProps } from '@interfaces/props.interfaces';

const Svg = ({ path, ...rest }: SvgProps) => {
  return (
    <object data={`${path}.svg`} type="image/svg+xml" {...rest}>
      Your Browser not support some images
    </object>
  );
};

export default Svg;
