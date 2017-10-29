import React from 'react';
import BlogList from '../ui/BlogList';

const blogs = [
  {
    text: { text: 'some text 1' },
    image: { src: 'https://test.com/test.png' }
  },
  {
    text: { text: 'some text 2' },
    image: { src: 'https://test.com/test.png' }
  },
  {
    text: { text: 'some text 3' },
    image: { src: 'https://test.com/test.png' }
  }
]

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs };
  }

  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs })
  }
}

export default BlogPage;
