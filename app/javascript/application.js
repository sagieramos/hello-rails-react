// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { Provider } from 'react-redux';
import store from './redux/store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root'),
);
