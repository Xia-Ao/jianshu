import React, {Component, Fragment} from 'react';
import {GlobalStyle} from "./style.js";
import Header from './common/header/index';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './view/home/component';
import ArticleDetail from './view/articleDetail/component'


class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle/>
        <Provider store={store}>
          <div>
            <Header></Header>
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={ArticleDetail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>

    );
  }
}

export default App;
