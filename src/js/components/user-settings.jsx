var React = require('react');
var gravatar = require('gravatar');

var userSettings = React.createClass({
	render: function() {
		var url = gravatar.url(this.props.email, {s:'96'});
		return (
			<div className="user-settings">
				<img className="gravatar" src={url} />
			</div>
		)
	}
});

module.exports = userSettings;	