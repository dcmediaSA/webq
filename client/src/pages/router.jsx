import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';
import Counter from './counter';
import Ticket from './ticket';

export default function RouterPage() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/counter" component={Counter} />
                <Route exact path="/ticket" component={Ticket} />
            </Switch>
        </Router>
    );
}
