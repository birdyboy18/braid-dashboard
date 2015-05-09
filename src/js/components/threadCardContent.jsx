var React = require('react');

var threadCardContent = React.createClass({
	render: function() {
		return (
			<div className="threadCardContent">
				{this.props.children}
			</div>
		)
	}
});

module.exports = threadCardContent;