var React = require('react');

//components
var Header = require('./header.jsx');
var MessageArea = require('./messageArea.jsx');
var ServiceFilter = require('./serviceFilter.jsx');
var CurrentThreadsList = require('./currentThreadsList.jsx');

var links = [
	{ url:'/', text:'Threads'},
	{ url:'/modifiers', text:'Modifiers'},
	{ url:'/entries', text:'Entries'},
	{ url:'/braid-settings', text:'Braid Settings'}
];

var services = [
	{ key:'youtube', name: 'Youtube' }
];

var threads = [
	{
		"_id": "554a818f6eda17d33587e567",
		"_braidId": "554a8034dfd1a2521ce4a179",
		"_userId": "birdyboy18",
		"service": "youtube",
		"name": "LearnCode.Academy",
		"description": "All the videos from learncode academy",
		"service_meta": {
		"_id": "554a818f6eda17d33587e566",
		"channel_username": "learncodeacademy"
		},
		"__v": 457,
		"modifiers": [
		"553d63a24e31e84061cf923c"
		],
		"entries": [
		"554b7c7f0f9c288477c26787",
		"554b7c7f0f9c288477c267a0",
		"554b7c7f0f9c288477c2678c",
		"554b7c7f0f9c288477c267a5",
		"554b7c7f0f9c288477c2678a",
		"554b7c7f0f9c288477c267a3",
		"554b7c7f0f9c288477c26791",
		"554b7c7f0f9c288477c267aa",
		"554b7c7f0f9c288477c2678f",
		"554b7c7f0f9c288477c267a8",
		"554b7c7f0f9c288477c26792",
		"554b7c7f0f9c288477c267ab",
		"554b7c7f0f9c288477c26796",
		"554b7c7f0f9c288477c267af",
		"554b7c7f0f9c288477c26794",
		"554b7c7f0f9c288477c267ad",
		"554b7c7f0f9c288477c26797",
		"554b7c7f0f9c288477c267b0",
		"554b7c7f0f9c288477c26795",
		"554b7c7f0f9c288477c267ae",
		"554b7c7f0f9c288477c26782",
		"554b7c7f0f9c288477c2679b",
		"554b7c7f0f9c288477c26780",
		"554b7c7f0f9c288477c26799",
		"554b7c7f0f9c288477c26783",
		"554b7c7f0f9c288477c2679c",
		"554b7c7f0f9c288477c26781",
		"554b7c7f0f9c288477c2679a",
		"554b7c7f0f9c288477c26784",
		"554b7c7f0f9c288477c2679d",
		"554b7c7f0f9c288477c26785",
		"554b7c7f0f9c288477c2679e",
		"554b7c7f0f9c288477c26788",
		"554b7c7f0f9c288477c267a1",
		"554b7c7f0f9c288477c26786",
		"554b7c7f0f9c288477c2679f",
		"554b7c7f0f9c288477c26789",
		"554b7c7f0f9c288477c267a2",
		"554b7c7f0f9c288477c2678d",
		"554b7c7f0f9c288477c267a6",
		"554b7c7f0f9c288477c2678b",
		"554b7c7f0f9c288477c267a4",
		"554b7c7f0f9c288477c2678e",
		"554b7c7f0f9c288477c267a7",
		"554b7c7f0f9c288477c26790",
		"554b7c7f0f9c288477c267a9",
		"554b7c7f0f9c288477c26793",
		"554b7c7f0f9c288477c267ac",
		"554b7c7f0f9c288477c26798",
		"554b7c7f0f9c288477c267b1"
		],
		"last_checked": "2015-05-08T15:17:36.168Z",
		"poll_time": 15,
		"active": true
	}	
];

var app = React.createClass({
	render: function() {
		return (
			<div>
				<Header links={links}/>
				<MessageArea>Threads are external services that weave into this current braid of content. 
				When ever one of these threads are updated the content in this braid will be automatically updated too.
				</MessageArea>
				<div className="main container">
					<ServiceFilter services={services}/>
					<CurrentThreadsList threads={threads}/>
				</div>
			</div>
		)
	}
});

module.exports = app;