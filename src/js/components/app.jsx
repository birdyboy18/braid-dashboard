var React = require('react');
var Reflux = require('reflux');

//components
var Header = require('./header.jsx');
var MessageArea = require('./messageArea.jsx');
var ServiceFilter = require('./serviceFilter.jsx');
var CurrentThreadsList = require('./currentThreadsList.jsx');
var AvailableThreadsList = require('./availableThreadsList.jsx');
var Modal = require('./modalWrap.jsx');

//Stores
var threadStore = require('../stores/threadStore.js');

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

var availableThreads = [
	{ id: 0, title: 'YouTube', service: 'youtube', description:'Use this to pull down references to YouTube Videos, playlists and more'}
];

var app = React.createClass({
	mixins:[Reflux.ListenerMixin],
	componentDidMount: function() {
		this.listenTo(threadStore,'_handleOnThreadUpdate');
	},
	getInitialState: function() {
		return {
			services: services,
			threads: [],
			availableThreads: availableThreads
		}
	},
	render: function() {
		return (
			<div>
				<Modal/>
				<div className="overlay" onClick={this._handleOverlayClick}></div>
				<Header links={links}/>
				<MessageArea>Threads are external services that weave into this current braid of content. 
				When ever one of these threads are updated the content in this braid will be automatically updated too.
				</MessageArea>
				<div className="main container">
					<ServiceFilter services={services}/>
					<CurrentThreadsList threads={this.state.threads}/>
					<AvailableThreadsList threads={this.state.availableThreads}/>
				</div>
			</div>
		)
	},
	_handleOnThreadUpdate: function(threads) {
		this.setState({
			threads: threads
		})
	},
	_handleOverlayClick: function() { 
		var data = {
			visible: false,
		}
		Actions.toggleModal(data);
	}
});

module.exports = app;