var React = require('react');
var _ = require('lodash');

var entryListItem = React.createClass({
	render: function() {
		var modifiers = [];
		_.each(this.props.entry.modifiers, function(value, key){
			modifiers.push(<li>{key}</li>);
		})
		return (
			<li className="entry-item flex">
				<div className="entry__thumbnail">
					<img src={this.props.entry.data.thumbnails.default.url}/>
				</div>
				<div className="entry__content">
				<h3>{this.props.entry.data.title}</h3>
				<div className="applied-modifiers">
					<ul>
						<span>Modifiers:</span>
						{modifiers}
					</ul>
				</div>
				</div>
			</li>
		)
	}
});

module.exports = entryListItem;