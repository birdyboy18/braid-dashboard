var React = require('react');
var Actions = require('../actions/actions.js');

var editThreadModal = React.createClass({
	render: function() {
		if (this.props.thread.service === 'youtube') {
			var iconUrl = '/assets/images/youtube.svg';
		}
		return (
		<div className="modal-inner">
			<div className="modal-header">
				<div className="service-icon">
					<img src={iconUrl} />
				</div>
				<div className="modal-title">
					{this.props.thread.name}
				</div>
				<div className="modal-cross" onClick={this._handleCloseModal}>X</div>
			</div>
			<div className="modal-content">
				<h3 className="modal-heading">Actions</h3>
				<a className="btn--deactivate">De-activate</a>
				<h3 className="modal-heading">Properties</h3>
				<div className="input-group">
					<label>Thread Name:</label>
					<input type="text" placeholder={this.props.thread.name}/>
				</div>
				<div className="input-group">
					<label>Description</label>
					<textarea defaultValue={this.props.thread.description}></textarea>
				</div>
				<input type="submit" className="btn--submit" value='save'/>
			</div>
		</div>
		)
	},
	_handleCloseModal: function() {
		Actions.toggleModal({ visible: false});
	}
});

module.exports = editThreadModal;