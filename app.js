
var Publisher = require('./publisher');
var publisher = new Publisher();


var Sub = require('./subscriber.js');
var Sub2 = require('./subscriber2.js');


var sub = new Sub(publisher);
var sub2 = new Sub2(publisher);

Sub.send();
Sub2.send();