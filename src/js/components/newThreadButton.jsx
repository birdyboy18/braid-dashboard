var React = require('react');

var newThreadButton = React.createClass({
	render: function() {
		return (
			<a className="btn btn--new btn--blue" onClick={this._handleClick}>Use</a>
		)
	},
	_handleClick: function() {
		console.log('add a new thread, fire the modal');
	}
});

module.exports = newThreadButton;