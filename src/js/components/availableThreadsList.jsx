var React = require('react');
var AvailableThreadCard = require('./availableThreadCard.jsx');

var availableThreadsList = React.createClass({
	render: function() {
		var threadCards = this.props.threads.map(function(thread){
			return <AvailableThreadCard id={thread._id} key={thread._id} thread={thread}/>
		});
		return (
			<div className="push-quarter currentThreadsList left three-quarters">
				<h1 className="h3 text--uppercase border-bottom full">Available Threads</h1>
				{threadCards}
			</div>
		)
	}
});

module.exports = availableThreadsList;
