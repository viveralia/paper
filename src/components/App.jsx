import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Article from '../pages/Article';
import Bookmark from '../pages/Bookmark';
import Layout from './Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bookmarks" component={Bookmark} />
                    <Route exact path="/article/:articleId" component={Article} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;