import { MOVE_OBJECTS, START_GAME } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
};

const initialState = {
    angle: 45,
    gameState: initialGameState,
};

//Sets up reducer that will call to action
const reducer = (state = initialState, action) => {
    //checks which action is being called
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case START_GAME:
            return startGame(state, initialGameState);
        default:
            return state;
    }   
}

export default reducer;