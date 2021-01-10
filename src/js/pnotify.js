import {
  error,
  success,
  info,
  defaults,
  defaultModules,
  Stack,
} from '@pnotify/core/dist/PNotify.js';


const myStack = new Stack({
  dir1: 'up',
  dir2: 'left',
  firstpos1: 150,
  firstpos2: 50,
  maxStrategy: 'close',
  // positioned: false,
});
defaults.mode = 'light';
defaults.delay = 500000;
defaults.stack = myStack;

export { error, success, info };