import React from 'react';
const Article = (props) => {
  const {article, author} = props;
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website}>
          <div>{author.firstName} {author.lastName}</div>
        </a>
      </div>
      <div>body</div>

      <div>{article.body}</div>
    </div>
  );
};

export default Article;
