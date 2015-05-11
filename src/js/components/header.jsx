var React = require('react');
var Link = require('react-router-component').Link;

var Braidselect = require('./braid-select.jsx');
var UserSettings = require('./user-settings.jsx');

var header = React.createClass({
	render: function() {
		return (
			<header className='header'>
				<div className='container'>
					<div className="navigation">
						<a href="/" className='logo'>
						<img src='/assets/images/logo@2x.png' />
					</a>
					<nav>
						<ul>
							{this.props.links.map(function(item){
								return <li><Link href={item.url}>{item.text}</Link></li> 
							})}
						</ul>
					</nav>
				</div>
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