import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { Page3 } from './pages/page3';

const Index = () => {
    return (
      <div>
          <div>React Content</div>
          <Router>
            <Switch>
                <Route path='/page1'>
                    <Page1 />
                </Route>
                <Route path='/page2'>
                    <Page2 />
                </Route>
              <Route path='/page3'>
                <Page3 />
              </Route>
                <Redirect to='/page1' />
            </Switch>
          </Router>
      </div>
    );
};

ReactDOM.render(<Index/>, document.getElementById('root'));
