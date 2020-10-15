import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

//services
import * as goalAPI from '../../utils/goals-api';
import * as logAPI from '../../utils/logs-api';
import userService from '../../utils/userService';

//components
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LogListPage from '../LogListPage/LogListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

//pages
import AddLogPage from '../AddLogPage/AddLogPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import CompletedGoalsListPage from '../CompletedGoalsListPage/CompletedGoalsListPage';
import GoalsListPage from '../GoalsListPage/GoalsListPage';
import AddGoalPage from '../AddGoalPage/AddGoalPage';
import EditGoalPage from '../EditGoalPage/EditGoalPage';

const EMOTIONS = {
  happy: {
    pic: "https://i.imgur.com/hjCAHpb.png", 
    points: 20
  },
  excited: {
    pic: "https://i.imgur.com/FIVzqiC.png", 
    points: 15
  },
  surprised: {
    pic: "https://i.imgur.com/wGIyVji.png", 
    points: 12
  },
  embarrassed: {
    pic: "https://i.imgur.com/QCefQe3.png", 
    points: 7
  },
  relaxed: {
    pic: "https://i.imgur.com/P7z2Wup.png", 
    points: 20
  },
  sad: {
    pic: "https://i.imgur.com/iYQvMAA.png", 
    points: 3
  },
  angry: {
    pic: "https://i.imgur.com/seEeTzq.png", 
    points: 8
  },
  numb: {
    pic: "https://i.imgur.com/UgdgHN8.png", 
    points: 0
  },
  irritated: {
    pic: "https://i.imgur.com/YtTr578.png", 
    points: 4
  },
  disgusted: {
    pic: "https://i.imgur.com/IIXG1EF.png", 
    points: 4
  },
  disappointed: {
    pic: "https://i.imgur.com/67nZtpu.png", 
    points: 5
  },
  tired: {
    pic: "https://i.imgur.com/jZgaH3g.png", 
    points: 7
  },
  scared: {
    pic: "https://i.imgur.com/14I012m.png", 
    points: 5
  },
  hopeful: {
    pic: "https://i.imgur.com/iph4ctn.png", 
    points: 20
  }
};

const AVATAR = [
  "https://i.imgur.com/C3Jd8pO.png", 
  "https://i.imgur.com/6w1NLhq.png",
  "https://i.imgur.com/LA3d4ko.png",
  "https://i.imgur.com/P5ZLfEW.png",
  "https://i.imgur.com/nnPZp4j.png",
  "https://i.imgur.com/lejs1lx.png",
  "https://i.imgur.com/g6IXvP1.png",
  "https://i.imgur.com/3DayTEq.png",
  "https://i.imgur.com/XYfAjp9.png",
  "https://i.imgur.com/7H8fv3j.png"
]

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
    const logs = await logAPI.getAll();
    this.setState({goals, logs});
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      const goals = await goalAPI.getAll();
      const logs = await logAPI.getAll();
      this.setState({goals, logs});
      console.log(this.state.logs);
      console.log(this.state.goals);
    }
  }

  /*--- Custom Methods ---*/
  getInitialState() {
    return {
      goals: [],
      logs: []
    }
  }

  getCompletedGoals = async () => {
    const goals = await goalAPI.getCompleted();
    this.setState({goals});
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
      () => this.props.history.push('/goals')
    );
  }

  handleAddLog = async newLogData => {
    const newLog = await logAPI.create(newLogData);
    this.setState(state => ({
      logs: [...state.logs, newLog]
    }), 
    () => this.props.history.push('/logs'));
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, goals: [], logs: [] });
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
          AVATAR={AVATAR}
        />
        </header>
        <main>
          <Switch>
          <Route exact path='/logs' render={() =>
            <LogListPage logs={this.state.logs} user={this.state.user} EMOTIONS={EMOTIONS}/>
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
              <EditGoalPage location={location} handleUpdateGoal={this.handleUpdateGoal} handleGoalStatusChange={this.handleGoalStatusChange}/>
              :
              <Redirect to='/login' />
            } />
            <Route exact path='/goals/completed' render={({location}) =>
              userService.getUser() ? 
              <CompletedGoalsListPage goals={this.state.goals} getCompletedGoals={this.getCompletedGoals}/>
              :
              <Redirect to='/login' />
            } />
            <Route exact path='/profile' render={({location}) =>
              userService.getUser() ? 
              <ProfilePage AVATAR={AVATAR}/>
              :
              <Redirect to='/login' />
            } />
            <Route exact path='/logs/create' render={({location}) =>
              userService.getUser() ? 
              <AddLogPage EMOTIONS={EMOTIONS} user={this.state.user} handleAddLog={this.handleAddLog}/>
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
