import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';

const initialState = {
    angle: 45,
}

//Sets up reducer that will call to action
const reducer = (state = initialState, action) => {
    //checks which action is being called
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        default:
            return state;
    }   
}

export default reducer;