import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// import our component
import StyleGuideView from './Components/Containers/StyleGuideView.jsx'
import MemberCardsView from './Components/Containers/MemberCardsView.jsx'

// client code
var routerPartial = (<Router history={hashHistory}>
                      <Route path="/" component={StyleGuideView} />
                      <Route path="/member/:member" component={MemberCardsView} />
                    </Router>)

ReactDOM.render(routerPartial, document.getElementById('app'));
