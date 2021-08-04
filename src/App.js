import './App.css';
import { connect } from "react-redux"
import Sidebar from './layout/Sidebar'
function App({articles, saveArticle}) {
  return (
    <div className="App">
      <Sidebar/>
      <div id="container"></div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveArticle: article =>
      dispatch({ type: 'ADD_ARTICLE', article}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
