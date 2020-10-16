import React from 'react';
import LogListItem from '../../components/LogListItem/LogListItem';

function LogListPage(props) {
    return (
        <div>
            <h1>My Logs</h1>
            {props.logs.map(log => (
                <LogListItem log={log} key={log._id} EMOTIONS={props.EMOTIONS}/>
            ))}
        </div>
    );
}

export default LogListPage;