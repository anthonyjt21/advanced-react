import React from 'react';
import ArticlesList from '../ArticlesList';

import renderer from 'react-test-renderer';

describe('ArticleList',() => {
  const testProps ={
    articles:{
      a: {id:'a'},
      b:{id:'b'}
    },
    articleActions:{
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it('renders correctly',() =>{
    const tree = renderer.create(
      <ArticlesList
        {...testProps}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree);
  });



});
