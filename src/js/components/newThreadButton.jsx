var React = require('react');
var Actions = require('../actions/actions.js');

var newThreadButton = React.createClass({
	render: function() {
		return (
			<a className="btn btn--new btn--blue" onClick={this._handleClick}>Use</a>
		)
	},
	_handleClick: function() {
		var data = {
			visible: true,
			service: 'YouTube',
			modalType: 'newThreadModal'
		}
		Actions.toggleModal(data);
	}
});

module.exports = newThreadButton;