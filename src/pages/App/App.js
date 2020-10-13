import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

//services
import * as goalAPI from '../../utils/goals-api';
import userService from '../../utils/userService';

//components
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LogListPage from '../LogListPage/LogListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

//pages
import GoalsListPage from '../GoalsListPage/GoalsListPage';
import AddGoalPage from '../AddGoalPage/AddGoalPage';
import EditGoalPage from '../EditGoalPage/EditGoalPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const goals = await goalAPI.getAll();
    this.setState({goals});
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      const goals = await goalAPI.getAll();
      this.setState({goals});
    }
  }

  /*--- Custom Methods ---*/
  getInitialState() {
    return {
      goals: []
    }
  }

  handleAddGoal = async newGoalData => {
    const newGoal = await goalAPI.create(newGoalData);
    this.setState(state => ({
      goals: [...state.goals, newGoal]
    }), 
    () => this.props.history.push('/goals'));
  }

  handleDeleteGoal= async id => {
    await goalAPI.deleteOne(id);
    this.setState(state => ({
      goals: state.goals.filter(g => g._id !== id)
    }), () => this.props.history.push('/goals'));
  }
  handleUpdateGoal = async updatedGoalData => {
    const updatedGoal = await goalAPI.update(updatedGoalData);
    const newGoalsArray = this.state.goals.map(g => 
      g._id === updatedGoal._id ? updatedGoal : g
    );
    this.setState(
      {goals: newGoalsArray},
      // This cb function runs after state is updated
      () => this.props.history.push('/goals')
    );
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, goals: [] });
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
          <Switch>
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
              <Route exact path='/goals/create' render={() =>
                userService.getUser() ? 
                <AddGoalPage user={this.state.user} handleAddGoal={this.handleAddGoal} />
                :
                <Redirect to='/login' />
              } />
            <Route exact path='/goals' render={() =>
              userService.getUser() ? 
              <GoalsListPage goals={this.state.goals} handleDeleteGoal={this.handleDeleteGoal}/>
              :
              <Redirect to='/login' />
            } />
            <Route exact path='/goals/edit' render={({location}) =>
              userService.getUser() ? 
              <EditGoalPage location={location} handleUpdateGoal={this.handleUpdateGoal}/>
              :
              <Redirect to='/login' />
            } />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
