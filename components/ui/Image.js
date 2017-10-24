import React from 'react';
import DOM from 'react-dom-factories';

const Image = ({ src, width, height, alt }) => {
  return DOM.img({
    src: src,
    width: width || 100,
    height: height || 100,
    alt: alt || 'oops!'
  })
};

export default Image;
