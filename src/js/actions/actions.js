var Reflux = require('reflux');

var actions = Reflux.createActions([
	'toggleModal',
	'findThreadById',
	'paginateEntries'
]);

module.exports = actions;