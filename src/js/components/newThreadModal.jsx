var React = require('react');
var Actions = require('../actions/actions.js');

var newThreadModal = React.createClass({
	render: function() {
		if (this.props.service === 'YouTube') {
			var iconUrl = '/assets/images/youtube.svg';
		}
		return (
		<div className="modal-inner">
			<div className="modal-header">
				<div className="service-icon">
					<img src={iconUrl} />
				</div>
				<div className="modal-title">
					Create a New Thread
				</div>
				<div className="modal-cross" onClick={this._handleCloseModal}>X</div>
			</div>
			<div className="modal-content">
				<h3 className="modal-heading">Details</h3>
				<div className="input-group">
					<label>Name:</label>
					<input type="text"/>
				</div>
				<div className="input-group">
					<label>Description:</label>
					<textarea ></textarea>
				</div>
				<div className="input-group">
					<label>Service:</label>
					<span>{this.props.service}</span>
				</div>
				<div className="input-group">
					<label>Channel Username:</label>
					<input type="text"/>
				</div>
				<input type="submit" className="btn--submit"/>
			</div>
		</div>
		)
	},
	_handleCloseModal: function() {
		Actions.toggleModal({ visible: false});
	}
});

module.exports = newThreadModal;