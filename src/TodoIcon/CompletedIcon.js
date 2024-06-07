import React from 'react';
import { TodoIcon } from './index.js';

function CompletedIcon({completed, onCompleted}){
    return (
        <TodoIcon
            type='check'
            color={completed ? 'green' : 'gray'}
            onClick = {onCompleted}
        />
    );
}

export {CompletedIcon};
