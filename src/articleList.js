class ArticleList {

  constructor() {
    this.articles = []
  }

  addArticle(article) {
    this.articles.push(article);
  }
  
  getArticles() {
    return this.articles;
  }
}