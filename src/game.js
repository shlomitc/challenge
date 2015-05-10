function init (){
	var logo = ['Y','O','U', ' ',
	'G','O','T','T','A', ' ',
	'L','O','V','E', ' ',
	'F','R','O','N','T','E','N','D'];
	return logo;
}

function omitChars(arr, numToOmit){
	var selectedIndices = [], rand;

	if(!arr || !arr.length || !numToOmit){
		return;
	}

	while(selectedIndices.length === numToOmit){
		rand = Math.floor(Math.random() * arr.length);
		if(arr[rand] !== ' ' && selectedIndices.indexOf(rand) === -1){
			selectedIndices.push(rand);
		}
	}
}



var GameHeader = React.createClass({
	render: function(){
		return (
			<div>
				<span>Think fast</span>|<GameTimer/>
			</div>
		);
	}
});

var GameTimer = React.createClass({
	render: function(){
		return (
			<span>0</span>
		);
	}
});

var GameBoard = React.createClass({
	render: function(){
		return (
			<div>
				<h1>board</h1>
			</div>
		);
	}
});

var GameYglf = React.createClass({
	render: function(){
		return (
			<div className="yglfBackground">
				<GameHeader />
				<GameBoard />
			</div>
		);
	}
});

React.render(
	<GameYglf />,
	document.getElementById('yglf')
);