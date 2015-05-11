var React = require('react');

var EntryListItem = require('./entryListItem.jsx');

var entriesList = React.createClass({
	render: function() {
		var entries = this.props.entries.map(function(entry){
			return <EntryListItem key={entry._id} id={entry._id} entry={entry}/>
		});
		return (
			<div className="entries-list left three-quarters">
				<h1 className="h3 text--uppercase border-bottom full">Entries from Testing-braid</h1>
				<ul>
					{entries}
				</ul>
			</div>
		)
	}
});

module.exports = entriesList;