var React = require('react');

var Braidselect = require('./braid-select.jsx');
var UserSettings = require('./user-settings.jsx');

var header = React.createClass({
	render: function() {
		return (
			<header className='header'>
				<div className='container'>
					<a href="/" className='logo'>
						<img src='/assets/images/logo@2x.png' />
					</a>
					<nav>
						<ul>
							{this.props.links.map(function(item){
								return <li><a href={item.url}>{item.text}</a></li> 
							})}
						</ul>
					</nav>
					<div className="settings-area">
					<Braidselect current='Testing-Braid' />
					<UserSettings email='paulbird1993@gmail.com' />
					</div>
				</div>
			</header>
		)
	}
});

module.exports = header;