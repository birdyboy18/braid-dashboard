var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var entriesStore = require('../stores/entriesStore.js');

var pagination = React.createClass({
	mixins:[Reflux.ListenerMixin],
	componentDidMount: function() {
		this.listenTo(entriesStore, '_handlePaginationUpdate');
	},
	getInitialState: function() {
		return {
			page: 0
		};
	},
	render: function() {
		return (
			<div className="pagination">
				<div className="left-arrow" onClick={this._decrementPage}>
				&larr;
				</div>
				<div className="page-number">
				{this.state.page}
				</div>
				<div className="right-arrow" onClick={this._incrementPage}>
				&rarr;
				</div>
			</div>
		)
	},
	_decrementPage: function() {
		if (this.state.page != 0 ) {
			var page = this.state.page - 1;
			Actions.paginateEntries(page);
		} else {
			Actions.paginateEntries(this.state.page);
		}
	},
	_incrementPage: function() {
		if (this.state.page <= 4) {
			var page = this.state.page + 1;
			Actions.paginateEntries(page);
		} else {
			Actions.paginateEntries(this.state.page);
		}
	},
	_handlePaginationUpdate: function(results) {
		console.log(results.page);
		this.setState({
			page: results.page
		});
	}
});

module.exports = pagination;