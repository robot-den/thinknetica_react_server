import React from 'react';
import DOM from 'react-dom-factories';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ image, text }) => {
  // this is also possible (in jsbin), but here JSX doesn't work :( (SyntaxError: Unexpected token (9:4))
  // return(
  //   <div>
  //     <Image src={image.src} />
  //     <br/>
  //     <TextBox string={text.string} />
  //     <br/>
  //   </div>
  // );
  return(
    DOM.div(
      null,
      React.createElement(Image, image),
      React.createElement('br'),
      React.createElement(TextBox, text),
      React.createElement('br')
    )
  )
}

export default BlogItem;
