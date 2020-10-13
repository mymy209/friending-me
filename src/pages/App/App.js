import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.css';

//services
import * as goalsAPI from '../../utils/goals-api';

//components
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LogListPage from '../LogListPage/LogListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import GoalsListPage from '../GoalsListPage/GoalsListPage';

import userService from '../../utils/userService';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const goals = await goalsAPI.getAll();
    this.setState({goals});
  }

  getInitialState() {
    return {
      goals: []
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        </header>
        <main>
          <Route exact path='/logs' render={() =>
            <LogListPage />
          } />
          <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/' render={() => 
              <LandingPage user={this.state.user}/>
            } />
            <Route exact path='/about' render={() => 
              <AboutPage />
            } />
            <Route exact path='/goals' render={() =>
              userService.getUser() ? 
              <GoalsListPage goals={this.state.goals}/>
              :
              <Redirect to='/login' />
            } />
        </main>
      </div>
    );
  }
}

export default App;
