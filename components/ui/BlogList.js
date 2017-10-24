import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => {
  return(
    DOM.div(
      null,
      _.map(
        blogs,
        (blog, key) => {
          blog.key = key
          return React.createElement(BlogItem, blog);
        }
      )
    )
  );
}

export default BlogList;
