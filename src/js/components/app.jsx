var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

//pages
var ThreadPage = require('./threadPage.jsx');
var EntriesPage = require('./entriesPage.jsx');

var app = React.createClass({
	render: function() {
		return (
			<Locations>
				<Location path="/" handler={ThreadPage} />
				<Location path='/entries' handler={EntriesPage}/>
			</Locations>
		)
	}
});

module.exports = app;