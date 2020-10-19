import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import { Route, useLocation } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route path="/signin">
        <SignIn />
      </Route>
      {/* <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route> */}
      <div className="App">
        <Route exact path="/signup">
          <SignUp />
        </Route>

        {/* <PrivateRoute path='/user' component={UserPage} /> */}
      </div>
    </div>
  );
}

export default App;
