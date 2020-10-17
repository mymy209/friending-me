import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

//services
import * as goalAPI from '../../utils/goals-api';
import * as logAPI from '../../utils/logs-api';
import userService from '../../utils/userService';

//components
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
import ChillPage from '../ChillPage/ChillPage';

const EMOTIONS = {
  Happy: {
    pic: "https://i.imgur.com/hjCAHpb.png", 
  },
  Excited: {
    pic: "https://i.imgur.com/FIVzqiC.png", 
  },
  Surprised: {
    pic: "https://i.imgur.com/wGIyVji.png", 
  },
  Embarrassed: {
    pic: "https://i.imgur.com/QCefQe3.png", 
  },
  Relaxed: {
    pic: "https://i.imgur.com/P7z2Wup.png", 
  },
  Sad: {
    pic: "https://i.imgur.com/iYQvMAA.png", 
  },
  Angry: {
    pic: "https://i.imgur.com/seEeTzq.png", 
  },
  Numb: {
    pic: "https://i.imgur.com/UgdgHN8.png", 
  },
  Irritated: {
    pic: "https://i.imgur.com/YtTr578.png", 
  },
  Disgusted: {
    pic: "https://i.imgur.com/IIXG1EF.png", 
  },
  Disappointed: {
    pic: "https://i.imgur.com/67nZtpu.png", 
  },
  Tired: {
    pic: "https://i.imgur.com/jZgaH3g.png", 
  },
  Scared: {
    pic: "https://i.imgur.com/14I012m.png", 
  },
  Hopeful: {
    pic: "https://i.imgur.com/iph4ctn.png", 
  }
};

const AVATAR = [
  "https://i.imgur.com/C3Jd8pO.png", 
  "https://i.imgur.com/6w1NLhq.png",
  "https://i.imgur.com/LA3d4ko.png",
  "https://i.imgur.com/P5ZLfEW.png",
  "https://i.imgur.com/nnPZp4j.png",
  "https://i.imgur.com/vBysQ4D.png",
  "https://i.imgur.com/yW6X3gY.png",
  "https://i.imgur.com/lejs1lx.png",
  "https://i.imgur.com/g6IXvP1.png",
  "https://i.imgur.com/3DayTEq.png",
  "https://i.imgur.com/XYfAjp9.png",
  "https://i.imgur.com/7H8fv3j.png",
  "https://i.imgur.com/9UFb64j.png",
  "https://i.imgur.com/qtS1OGC.png",
  "https://i.imgur.com/6BDfsXs.png",
  "https://i.imgur.com/Z6N6i1G.png",
  "https://i.imgur.com/tLMLYmc.png",
  "https://i.imgur.com/p6lsJOB.png",
  "https://i.imgur.com/tjGKlQA.png",
  "https://i.imgur.com/ogyM8sp.png",
  "https://i.imgur.com/7gvxSIG.png",
  "https://i.imgur.com/cQT9u00.png",
  "https://i.imgur.com/R44xHp6.png",
  "https://i.imgur.com/ioMxJzw.png",
  "https://i.imgur.com/SzsiHpZ.png",
  "https://i.imgur.com/JoXlLL8.png",
  "https://i.imgur.com/a92KMsD.png",
  "https://i.imgur.com/OvVshne.png",
  "https://i.imgur.com/Faca0pV.png",
  "https://i.imgur.com/f1M2z2z.png",
  "https://i.imgur.com/482NWmE.png",
  "https://i.imgur.com/0oyfoJG.png",
  "https://i.imgur.com/dEDHjqy.png",
  "https://i.imgur.com/laMZT9u.png"
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
            <Route exact path='/chill' render={() =>
              <ChillPage/>
            }/>
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
