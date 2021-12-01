import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dongchurl from 'pages/dongchurl/Dongchurl';

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Dongchurl} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
