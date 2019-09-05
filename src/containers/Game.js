import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame } from '../actions/index';

//Redux cares about these states
const mapStateToProps = state => ({
    angle: state.angle,
    gameState: state.gameState,
});

//Tell Redux to pass moveObjects and startGame functions to App Component
const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;