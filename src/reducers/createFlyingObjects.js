import {
    createInterval, flyingObjectsStarterYAxis, maxFlyingObjects, flyingObjectsStarterPositions
} from '../utils/constants';

export default (state) => {
    //if game is not running, return state
    if ( ! state.gameState.started) return state;

    //if running, get current time
    const now =(new Date()).getTime();
    //deconstruct state.gameState
    const { lastObjectCreatedAt, flyingObjects } = state.gameState;
    //current time minus lastObjectCreated is greater than 1 second &&
    //flyingObjects's length is less than maxFlyingObjects
    const createNewObject = (
        now - (lastObjectCreatedAt).getTime() > createInterval && flyingObjects.length < maxFlyingObjects
    );
    //if createNewObject is true, use Math.floor to fetch rand num between 0-3
    if ( !createNewObject) return state;

    const id = (new Date()).getTime();
    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    const newFlyingObject = {
        position: {
            x: flyingObjectPosition,
            y: flyingObjectsStarterYAxis,
        },
        createdAt: (new Date()).getTime(),
        id,
    };

    return {
        ...state,
        gameState: {
            ...state.gameState,
            flyingObjects: [
                ...state.gameState.flyingObjects,
                newFlyingObject
            ],
            lastObjectCreatedAt: new Date(),
        }
    }
}