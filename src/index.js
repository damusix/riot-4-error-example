import * as riot from 'riot';

// Import state manager
import StateManager from './state';

// Import actions from main actions file
import Actions from './actions';

// Import main riot app
import App from './app.riot';
import SampleTag from './sample-tag.riot';

// Pass state manage to actions
const actions = Actions(StateManager.stream, StateManager.getState);

// Expose globals inside components
riot.install(function (component) {

    // Allows you to reference `this.state` and `this.actions` in components
    component.state = StateManager.state;
    component.actions = actions;
    component.stream = StateManager.stream;

    // When state is updated, update component state.
    StateManager.stream.on.value((newState) => component.update(newState));
});

riot.register('sample-tag', SampleTag);

const mountApp = riot.component(App);

mountApp(document.getElementById('root'));
