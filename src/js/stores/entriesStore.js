var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');
var prefix = require('superagent-prefix')('http://localhost:2000/api/delivery/v1');

var Actions = require('../actions/actions.js');

var entriesStore = Reflux.createStore({
	init: function() {
		var self = this;
		this._results = {
			page: 0,
			entries: []
		}
		request
		.get('/entries?braidId=554f9ac0efa011ddb52c5d99&limit=10')
		.use(prefix)
		.set('Accept','application/json')
		.end(function(err, res){
			if (res.ok) {
				self._results.entries = res.body;
				self.trigger(self._results);
			} else {

			}
		});
		//listen to actions
		this.listenTo(Actions.paginateEntries, '_handlePaginateEntries');
	},
	_getEntries: function() {
		return this._results.entries;
	},
	_handlePaginateEntries: function(page) {
		this._results.page = page;
		var self = this;
		var limit = 10;
		var skip = limit * this._results.page;
		request
		.get('/entries?braidId=554f9ac0efa011ddb52c5d99&limit=10&skip=' + skip)
		.use(prefix)
		.set('Accept','application/json')
		.end(function(err, res){
			if (res.ok) {
				self._results.entries = res.body;
				self.trigger(self._results);
			} else {

			}
		});
	}
});

module.exports = entriesStore;