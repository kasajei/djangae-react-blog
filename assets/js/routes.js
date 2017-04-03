import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainView from './Containers/MainView';
import PostView from './Containers/PostView';

export default (
    <div>
        <Route path="/" component={MainView}/>
        <Route path="/post" component={PostView}/>
    </div>
)