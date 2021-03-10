import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={StreamList}></Route>
          <Route path='/streams/new' exact component={StreamCreate}></Route>
          <Route path='/streams/delete/:streamId' exact component={StreamDelete}></Route>
          <Route path='/streams/edit/:streamId' exact component={StreamEdit}></Route>
          <Route path='/streams/:streamId' exact component={StreamShow}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
