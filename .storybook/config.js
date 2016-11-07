import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/registerForm.js');
}

configure(loadStories, module);
