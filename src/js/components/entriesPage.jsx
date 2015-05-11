var React = require('react');
var Reflux = require('reflux');

//components
var Header = require('./header.jsx');
var Modal = require('./modalWrap.jsx');
var EntriesList = require('./entriesList.jsx');
var ServiceFilter = require('./serviceFilter.jsx');
var Pagination = require('./pagination.jsx');

//Stores
var entriesStore = require('../stores/entriesStore.js');

//actions
var Actions = require('../actions/actions.js');

var links = [
	{ url:'/', text:'Threads'},
	{ url:'/modifiers', text:'Modifiers'},
	{ url:'/entries', text:'Entries'},
	{ url:'/braid-settings', text:'Braid Settings'}
];

var services = [
	{ key:'youtube', name: 'Youtube' }
];

var entriesPage = React.createClass({
	mixins:[Reflux.ListenerMixin],
	componentDidMount: function() {
		this.listenTo(entriesStore,'_handleOnEntriesUpdate');
		this.setState({
			entries: entriesStore._getEntries()
		})
	},
	getInitialState: function() {
		return {
			entries: []
		}
	},
	render: function() {
		return (
		<div>
			<Modal/>
			<div className="overlay" onClick={this._handleOverlayClick}></div>
			<Header links={links}/>
			<div className="main container">
				<div className="sidebar left quarter">
				<ServiceFilter services={services}/>
				<Pagination />
				</div>
				<EntriesList entries={this.state.entries} />
			</div>
		</div>
		)
	},
	_handleOnEntriesUpdate: function(results) {
		this.setState({
			entries: results.entries
		})
	},
	_handleOverlayClick: function() { 
		var data = {
			visible: false,
		}
		Actions.toggleModal(data);
	}
});

module.exports = entriesPage;