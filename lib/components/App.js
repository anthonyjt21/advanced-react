import React from 'react';

import DataApi from '../DataApi';
import {data} from '../testData.json';
import ArticlesList from './ArticlesList';

const api = new DataApi(data);

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  // lookupAuthor
  articlesActions ={
    lookupAuthor:authorId => this.state.authors[authorId],
  };
  render(){
    return (
      <ArticlesList
        articles={this.state.articles}
        articleActions={this.articlesActions}
      />
    );
  }
}

export default App;
