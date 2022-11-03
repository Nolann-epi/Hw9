const moment = require('moment');

console.log(moment().format('dddd, MMMM Do YYYY'));
console.log(moment().diff(moment('1976-11-26'), 'years'));