var React = require('react');
var ThreadCardHeader = require('./threadCardHeader.jsx');
var ThreadCardContent = require('./threadCardContent.jsx');
var ThreadEditButton = require('./threadEditButton.jsx');

var threadCard = React.createClass({
	render: function() {
		var current = new Date();
		var last_checked = new Date(this.props.thread.last_checked);
		var one_min=1000*60;
		var lastChecked = Math.ceil((current.getTime() - last_checked) / one_min );
		if (this.props.thread.service === 'youtube') {
			var iconUrl = '/assets/images/youtube.svg';
		}
		return (
			<div className="thread-card third left align-center">
				<div className="thread-card-inner">
					<ThreadCardHeader thread={this.props.thread}/>
					<ThreadCardContent>
						<div className="media-holder service-icon--large">
							<img src={iconUrl} />
						</div>
						<p className="strong thread-card-name">{this.props.thread.name}</p>
						<p><span className="strong">Last Checked:</span> {lastChecked} mins ago</p>
						<p><span className="strong">Affects: </span>{this.props.thread.entries.length} Entries</p>
					</ThreadCardContent>
					<ThreadEditButton thread={this.props.thread}/>
				</div>
			</div>
		)
	}
});

module.exports = threadCard;