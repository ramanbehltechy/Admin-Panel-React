const mongoose = require('mongoose');

module.exports = () => {
	//Database Connection
	mongoose
		.connect(process.env.MONGODB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('MongoDb Connected!......'))
		.catch((err) => console.log(err.message));

	//Connected Event
	mongoose.connection.on('connected', () => {
		console.log('Mongoose connected to db....');
	});
	//Error Event
	mongoose.connection.on('error', (err) => {
		console.log(err.message);
	});
	//DisConnected Event
	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose connection is disconnected....');
	});


};