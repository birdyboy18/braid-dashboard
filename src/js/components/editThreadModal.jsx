var React = require('react');
var Actions = require('../actions/actions.js');

var editThreadModal = React.createClass({
	render: function() {
		return (
		<div className="modal-inner">
			<div className="modal-header">
				<div className="service-icon">
					<img src='' />
				</div>
				<div className="modal-title">
					JUMP TV
				</div>
				<div className="modal-cross" onClick={this._handleCloseModal}>X</div>
			</div>
			<div className="modal-content">
				<h3 className="modal-heading">Actions</h3>
				<a className="btn--deactivate">De-activate</a>
				<h3 className="modal-heading">Properties</h3>
				<div className="input-group">
					<label>Thread Name:</label>
					<input type="text" placeholder='JUMP TV'/>
				</div>
				<div className="input-group">
					<label>Description</label>
					<textarea cols="30" rows="10" defaultValue='default stuffs'></textarea>
				</div>
			</div>
		</div>
		)
	},
	_handleCloseModal: function() {
		Actions.toggleModal({ visible: false});
	}
});

module.exports = editThreadModal;