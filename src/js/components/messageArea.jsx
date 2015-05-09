var React = require('react');

var messageArea = React.createClass({
	getInitialState: function() {
		return {
			hidden: false
		}
	},
	render: function() {
		return (
			<div className={ 'message-area ' + (this.state.hidden ? 'hidden' : null ) } >
				<span className="message-area__close-button" onClick={this._hide}>X</span>
				<p>{this.props.children}</p>
			</div>
		)
	},
	_hide: function() {
		this.setState({
			hidden: true
		})
	}
});

module.exports = messageArea;