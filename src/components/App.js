import React from 'react';
import { Router, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserDetail from  './UserDetail';
import history from '../history';
import Header from './Header';

const App = () => {
    return (
        <div>

            <Router history={history}>
            <Route path="/" exact component={UsersList} />
            <Route path="/:id" exact component={UserDetail} />
            </Router>
        </div>
    );
};

export default App;