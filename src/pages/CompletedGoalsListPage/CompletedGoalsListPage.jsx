import React from 'react';
import CompletedGoalListItem from '../../components/CompletedGoalListItem/CompletedGoalListItem';
import * as goalAPI from '../../utils/goals-api';
import {Link} from 'react-router-dom';

class CompletedGoalsListPage extends React.Component{
    state = {
        goals: []
    }

    async componentDidMount() {
        const goals = await goalAPI.getCompleted();
        this.setState({goals});
    }

    render() {
        return (
            <div>
                <h1>Completed Goals List</h1>
                {this.state.goals.map(goal =>(
                    <CompletedGoalListItem goal={goal} key={goal._id} />
                ))}
                <Link to='/goals'>Back to Goals List</Link>
            </div>
        );
    }
}

export default CompletedGoalsListPage;