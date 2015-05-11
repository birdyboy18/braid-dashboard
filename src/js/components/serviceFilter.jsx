var React = require('react');

var serviceFilter = React.createClass({
	render: function() {
		return (
			<div className="service-filter">
				<h3 className="filter__title">Filter By</h3>
				<ul>
					{this.props.services.map(function(service){
						return <li key={service.key} id={service.key} >{service.name}</li>
					})}
				</ul>
			</div>
		)
	}
});

module.exports = serviceFilter;