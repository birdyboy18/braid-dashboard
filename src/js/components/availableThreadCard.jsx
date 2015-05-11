var React = require('react');
var ThreadCardContent = require('./threadCardcontent.jsx');
var NewThreadButton = require('./newThreadButton.jsx');

var availableThreadCard = React.createClass({
	render: function() {
		if (this.props.thread.service === 'youtube') {
			var iconUrl = '/assets/images/youtube.svg';
		};
		return (
			<div className="thread-card third left">
				<div className="thread-card-inner align-center">
					<ThreadCardContent>
						<div className="media-holder service-icon--large">
							<img src={iconUrl} />
						</div>
						<p className="strong thread-card-name">{this.props.thread.title}</p>
						<p>{this.props.thread.description}</p>
					</ThreadCardContent>
					<NewThreadButton/>
				</div>
			</div>
		)
	}
});

module.exports = availableThreadCard;