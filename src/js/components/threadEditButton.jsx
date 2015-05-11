var React = require('react');
var Actions = require('../actions/actions.js');

var threadEditButton = React.createClass({
	render: function() {
		return (
			<a className="btn btn--edit btn--blue" onClick={this._handleOnClick}>Edit</a>
		)
	},
	_handleOnClick: function (e) {
		var data = {
			visible: true,
			modalType: 'editModal',
			threadId: this.props.id
		};
		Actions.toggleModal(data);
	}
});

module.exports = threadEditButton;