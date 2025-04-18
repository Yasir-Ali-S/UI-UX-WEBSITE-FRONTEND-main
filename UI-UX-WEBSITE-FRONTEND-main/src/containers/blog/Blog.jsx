import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT and Open AI is the future. Let us explore how it is?" />
        </div>
        <div className="gpt3_blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT and Open AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT and Open AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT and Open AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT and Open AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  );
}

export default Blog;