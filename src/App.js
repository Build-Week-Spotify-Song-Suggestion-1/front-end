import React from 'react';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import UserPage from './User/UserPage'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



function App() {
  return (
    <div>
      <UserPage/>
    </div>
  //   <Router>
  //   <div className="App">
  //     {/* <Route path="/signin">
  //       <SignIn />
  //     </Route> */}
  //     {/* <Route exact path='/'>
  //       <Home />
  //     </Route> */}
  //     {/* <Route path='/about'>
  //       <About />
  //     </Route> */}
  //     {/* <div className="App">
  //       <Route exact path="/signup">
  //         <SignUp />
  //       </Route> */}

  //       <Route path='/user' component={UserPage} />
  //     </div>
  // </Router>
  );
}

export default App;
