import { createStore } from "redux"
const initialState = {
    articles: [
      { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
      { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    ],
  }
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const newArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        body: action.article.body,
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }
    default:
      return state
  }
}
export default createStore(reducer)