import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { registerMicroApps, start, setDefaultMountApp,  initGlobalState} from 'qiankun';
import 'antd/dist/antd.css';
import store from "./store"
import { Provider } from "react-redux"
import setup from './bootstrap'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
setup()
reportWebVitals();
