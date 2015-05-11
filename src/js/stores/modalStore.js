var Reflux = require('reflux');
var Actions = require('../actions/actions.js');

var modalStore = Reflux.createStore({
	init: function() {
		//listen to actions
		this.listenTo(Actions.toggleModal, '_handleToggleModal');
	},

	_handleToggleModal: function(data) {
		this.trigger(data);
	}
});

module.exports = modalStore;