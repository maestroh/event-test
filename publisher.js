var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Publisher(){
	EventEmitter.call(this);
}

util.inherits(Publisher, EventEmitter);

Publisher.prototype.send = function(message){
	this.emit('published', message);
}

module.exports = Publisher;