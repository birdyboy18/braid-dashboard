var React = require('react');

var braidSelect = React.createClass({
	render: function() {
		return (
			<div className="braid-settings">
				<span><img className="braid-settings__icon" src="/assets/images/braid-icon@2x.svg" />{this.props.current}</span>
			</div>
		)
	}
});

module.exports = braidSelect;