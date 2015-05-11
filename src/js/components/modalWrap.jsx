var React = require('react');
var Reflux = require('reflux');
var modalStore = require('../stores/modalStore.js');

//components
var EditThreadModal = require('./editThreadModal.jsx');
var NewThreadModal = require('./newThreadModal.jsx');

var modalWrap = React.createClass({
	mixins:[Reflux.ListenerMixin],
	componentDidMount: function() {
		this.listenTo(modalStore,'_toggleModal');
	},
	getInitialState: function() {
		return {
			visible: false
		}
	},
	render: function() {
		if (this.state.modalType == 'editModal') {
			return (
				<div className={'modal ' + (this.state.visible ? 'visible': 'hidden' )} >
					<EditThreadModal thread={this.state.thread}/>
				</div>
			)
		} else if (this.state.modalType == 'newThreadModal') {
			return (
				<div className={'modal ' + (this.state.visible ? 'visible': 'hidden' )} >
					<NewThreadModal service={this.state.service}/>
				</div>
			)
		} else {
			return (
				<div className={'modal ' + (this.state.visible ? 'visible': 'hidden' )} >
					<p>I am a null modal</p>
				</div>
			)
		}
	},
	_toggleModal: function(data) {
		this.setState({
			visible: data.visible,
			modalType: data.modalType,
			thread: data.thread,
			service: data.service
		});
	},
});

module.exports = modalWrap;