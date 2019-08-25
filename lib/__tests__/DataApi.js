import DataApi from '../DataApi';
import {data} from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleid =data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleid);
    expect(articles[articleid].title).toBe(articleTitle);

  });

  it('exposes author as an object', () => {
    const authors = api.getAuthors();
    const authorid =data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;
    expect(authors).toHaveProperty(authorid);
    expect(authors[authorid].firstName).toBe(authorFirstName);

  });
});
