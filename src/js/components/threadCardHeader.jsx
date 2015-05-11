var React = require('react');

var threadCardHeader = React.createClass({
	render: function() {
		if (this.props.thread.service === 'youtube') {
			var iconUrl = '/assets/images/youtube.svg';
		}
		return (
			<div className="threadCardHeader">
				<div className="service-icon left">
					<img src={iconUrl} />
				</div>
				<div className="thread-status right">
					<span className={ 'status-icon ' + (this.props.thread.active ? 'status-active' : 'status-unactive') }></span>
					<span className="active-text" ><strong>Status:</strong> { this.props.thread.active ? ' Active' : ' Unactive'} </span>
				</div>
			</div>
		)
	}
});

module.exports = threadCardHeader;