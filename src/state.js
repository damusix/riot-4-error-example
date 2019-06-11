// Using Erre as state management
import Erre from 'erre';

// Initial state
let state = {
    isMounted: false,
    check: true,
    counter: 0
};

const getState = () => state;
const mergeState = function (update) {

    state = {
        ...state,
        ...update
    };

    return state;
}

// Create streaming state
const stream = Erre(mergeState);

export default { state, stream, getState, mergeState };