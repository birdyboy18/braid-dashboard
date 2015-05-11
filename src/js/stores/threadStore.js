var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');
var prefix = require('superagent-prefix')('http://localhost:2000/api/delivery/v1');

var Actions = require('../actions/actions.js');

var threadStore = Reflux.createStore({
	init: function() {
		var self = this;
		this._threads = [];
		request
		.get('/thread?braidId=554f9ac0efa011ddb52c5d99')
		.use(prefix)
		.set('Accept','application/json')
		.end(function(err, res){
			if (res.ok) {
				self._threads = res.body;
				self.trigger(self._threads);
			} else {

			}
		});
		//listen to actions
		this.listenTo(Actions.findThreadById, '_handleFindThreadById');
	},

	_getThreads: function() {
		var self = this;
		return this._threads;
	},

	_handleFindThreadById: function(threadId) {
		this._threads.map(function(thread){
			if ( thread._id === threadId ) {
				return thread;
			}
		});
	}
});

module.exports = threadStore;