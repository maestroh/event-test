var publisher = null;

module.exports = function(events){
	publisher = events;
	publisher.on('published', function(message){
		console.log('sub2');
		console.log(message);
	});
}

module.exports.send = function(){
	publisher.send('Hello Nurse, Again!');
}
