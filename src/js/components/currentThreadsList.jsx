var React = require('react');
var ThreadCard = require('./threadCard.jsx');

var currentThreadsList = React.createClass({
	render: function() {
		var threadCards = this.props.threads.map(function(thread){
			return <ThreadCard thread={thread}/>
		});
		return (
			<div className="currentThreadsList left three-quarters">
				<h1 className="h3 text--uppercase border-bottom full">Currently Used Threads</h1>
				{threadCards}
			</div>
		)
	}
});

module.exports = currentThreadsList;