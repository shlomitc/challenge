



var YglfHeader = React.createClass({
	getInitialState: function () {
		return {time: 0};
	},
	render: function(){
		return (
			<div className="yglfHeader">
				<span>A true frontend must type fast</span> | <YglfTimer timer={this.state.time}/>
			</div>
		);
	}
});

var YglfTimer = React.createClass({
	componentDidMount : function(){
		return;
	},
	render: function(){
		return (
			<span>...</span>
		);
	}
});

var YglfGame = React.createClass({
	getInitialState: function () {
		var full = this.props.game.full;
		var omitted = this.props.game.omitted;
		return {logo: omitted};
	},
	componentDidMount: function(logo){
		//TODO - update guess
	},
	render: function(){
		var lines = [];
		this.state.logo.split(' ').forEach(function (word) {
			lines.push(<div> {word} </div>);
		});

		return (
			<div className="yglfGame">
				<div className="yglfLogo">
					{lines}
				</div>
			</div>
		);
	}
});

var Yglf = React.createClass({
	init: function(){
		var full = 'you gotta love frontend',
			numToOmit = Math.floor(full.split(' ').join('').length * Math.random()) || 1;
		return {
			game: this.createGame(full, numToOmit)
		};
	},
	createGame: function (full, numToOmit) {
		var selectedIndices = [],
			rand, omitted;

		omitted = full.split('');
		while (selectedIndices.length < numToOmit) {
			rand = Math.floor(Math.random() * full.length);
			if (full[rand] !== ' ' && selectedIndices.indexOf(rand) === -1) {
				selectedIndices.push(rand);
				omitted[rand] = '_';
			}
		}

		return {
			full: full,
			omitted: omitted.join(''),
			indices: selectedIndices
		}
	},
	getInitialState: function () {
		return this.init();
	},
	render: function(){
		return (
			<div>
				<YglfHeader/>
				<YglfGame game={this.state.game}/>
			</div>
			);
		}
});

React.render(
	<Yglf />,
	document.getElementById('yglf')
);