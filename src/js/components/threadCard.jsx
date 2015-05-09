var React = require('react');
var ThreadCardHeader = require('./threadCardHeader.jsx');
var ThreadCardContent = require('./threadCardContent.jsx');

var threadCard = React.createClass({
	render: function() {
		var current = new Date();
		var last_checked = new Date(this.props.thread.last_checked);
		var one_min=1000*60;
		var lastChecked = Math.ceil((current.getTime() - last_checked) / one_min );
		return (
			<div className="thread-card third left align-center">
				<ThreadCardHeader thread={this.props.thread}/>
				<ThreadCardContent>
				<p>{this.props.thread.name}</p>
				</ThreadCardContent>
			</div>
		)
	}
});

module.exports = threadCard;