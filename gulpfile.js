var requireDir = require('require-dir');

//get all tasks in the gulp tasks (sub)directory
requireDir('./gulp/tasks', { recurse: true });