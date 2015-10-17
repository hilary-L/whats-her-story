import React from 'react';
var CodeBoard = require('./CodeBoard');
var StoryBoard = require('./StoryBoard');


var Main = React.createClass({

	getInitialState: function() {

		return (
				{
				storyProperties: {
					name: '',
					lookingFor: '',
					leftRoom: '',
					rightRoom: '',
					obstacle: '',
					treasure: '',
					cave: '',
					// meanPerson: '',
					nicePerson: '',
					envelope: '',
					present: ''
				},
				inputPage: {
					pageOne: true,
					pageTwo: false,
					pageThree: false,
					pageFour: false,
					pageFive: false
				},
				storyDisplay: {
					pageOne: '',
					pageTwo: '',
					pageThree: '',
					pageFour: '',
					pageFive: ''
				},
				storyVisible: {
					pageTwo: false,
					pageThree: false,
					pageFour: false,
					pageFive: false
				},
				codeDisplay: {
					firstBlock: false,
					secondBlock: false,
					thirdBlock: false,
					fourthBlock: false
				}

				}
		)

	},

	handleChangePage: function(pageChoice, event) {

		var inputPage = {
			pageOne: false,
			pageTwo: false,
			pageThree: false,
			pageFour: false,
			pageFive: false
		}

		inputPage[pageChoice] = true;

		this.setState({
			inputPage: inputPage
		});

		this.populatePage(pageChoice);
	},

	handleInput: function(property, block, event) {
		
		var storyProperties = this.state.storyProperties;

		var codeDisplay = {
			firstBlock: false,
			secondBlock: false,
			thirdBlock: false,
			fourthBlock: false,
			fifthBlock: false
		}

		storyProperties[property] = event.target.value;
		codeDisplay[block] = true;

		this.setState({
				storyProperties: storyProperties,
				codeDisplay: codeDisplay

		});



	},

	populatePage: function(page) {

		switch(page) {
			case 'pageTwo':
				var storyDisplay = this.state.storyDisplay;
				var storyVisible = this.state.storyVisible;
				storyDisplay[page] = 'Your name is ' + this.state.storyProperties.name + ' and you seek ' + this.state.storyProperties.lookingFor;
				storyVisible[page] = true;
				this.setState({
					storyDisplay: storyDisplay,
					storyVisible: storyVisible
				});
				break;
			case 'pageThree':
				var storyDisplay = this.state.storyDisplay;
				var storyVisible = this.state.storyVisible;
				storyDisplay[page] = 'What we say on page 3';
				storyVisible[page] = true;
				this.setState({
					storyDisplay: storyDisplay,
					storyVisible: storyVisible
				});
				break;
			case 'pageFour':
				var storyDisplay = this.state.storyDisplay;
				var storyVisible = this.state.storyVisible;
				storyDisplay[page] = 'What we say on page 4';
				storyVisible[page] = true;
				this.setState({
					storyDisplay: storyDisplay,
					storyVisible: storyVisible
				});
				break;
			case 'pageFive':
				var storyDisplay = this.state.storyDisplay;
				var storyVisible = this.state.storyVisible;
				storyDisplay[page] = 'What we say on page 5';
				storyVisible[page] = true;
				this.setState({
					storyDisplay: storyDisplay,
					storyVisible: storyVisible
				});
				break;
			default:
				return true;
		}

	},


	render: function() {

		// Main is top level component where inputs will be, has state. //
		// Two child components, story view and code view. Will be siblings. //
		// Use object dictionary for inputs, handleGetInput: function() {}, var inputObject = {'prop1', 'prop2' }  //
		// inputObject[nameSentFromInputBind] = the contents of the input //
		// 
		// 
		
		console.log(this.state.storyDisplay.pageOne);

		return (
			<div className="container">
				<StoryBoard storyDisplay={this.state.storyDisplay} storyProperties={this.state.storyProperties} storyVisible={this.state.storyVisible}/>
				<div className="view-container">
					<div className={this.state.inputPage.pageOne ? 'card' : 'hidden card'}>
						<p>What is your character name? <input type="text" value={this.state.storyProperties.name} onChange={this.handleInput.bind(null, 'name', 'firstBlock')}></input></p>
						<p>What does your character seek? <input type="text" value={this.state.storyProperties.lookingFor} onChange={this.handleInput.bind(null, 'lookingFor', 'firstBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageTwo')} className="btn btn-primary">Next</a>	
					</div>
					<div className={this.state.inputPage.pageTwo ? 'card' : 'hidden card'}>
						<p>There is a door to your left and a door to your right.</p>
						<p>What is the setting behind the door to your left? <input type="text" value={this.state.storyProperties.leftRoom} onChange={this.handleInput.bind(null, 'leftRoom', 'secondBlock')}></input></p>
						<p>What is the setting behind the door to your right? <input type="text" value={this.state.storyProperties.rightRoom} onChange={this.handleInput.bind(null, 'rightRoom', 'secondBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageThree')} className="btn btn-primary">Next</a>	
					</div>
					<div className={this.state.inputPage.pageThree ? 'card' : 'hidden card'}>
						<p>Behind the door to your left, the {this.state.storyProperties.leftRoom}, there is an obstacle!  What is it? <input type="text" value={this.state.storyProperties.obstacle} onChange={this.handleInput.bind(null, 'obstacle', 'thirdBlock')}></input></p>
						<p>If your character, {this.state.storyProperties.name}, overcomes the obstacle, they are magically transported to a castle.  In the castle is a treasure chest.  But what is in the treasure chest? <input type="text" value={this.state.storyProperties.treasure} onChange={this.handleInput.bind(null, 'treasure', 'thirdBlock')}></input></p>
						<p>If your character does not overcome the obstacle, they are transported to the bottom of the sea.  It is not very fun down there, but there is a glowing cave.  What is in the cave? <input type="text" value={this.state.storyProperties.cave} onChange={this.handleInput.bind(null, 'cave', 'thirdBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageFour')} className="btn btn-primary">Next</a>	
					</div>
					<div className={this.state.inputPage.pageFour ? 'card' : 'hidden card'}>
						<p>Okay, let us go back to the door on the right.  Behind that door, {this.state.storyProperties.rightRoom}, there are two people, one mean and one nice.</p>
						<p>Who is the mean person? <input type="text" value={this.state.storyProperties.meanPerson} onChange={this.handleInput.bind(null, 'meanPerson', 'fourthBlock')}></input></p>
						<p>Who is the nice person? <input type="text" value={this.state.storyProperties.nicePerson} onChange={this.handleInput.bind(null, 'nicePerson', 'fourthBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageFive')} className="btn btn-primary">Next</a>	
					</div>
					<div className={this.state.inputPage.pageFive ? 'card' : 'hidden card'}>
						<p>If you talk to the mean person, they hand you an envelope.  You suspect it is full of poison, but just to be sure you open it.  What is inside?  <input type="text" value={this.state.storyProperties.envelope} onChange={this.handleInput.bind(null, 'envelope', 'fifthBlock')}></input></p>
						<p>If you talk to the nice person, they are delighted to see you!  They give you a present.  What is in the present?  <input type="text" value={this.state.storyProperties.present} onChange={this.handleInput.bind(null, 'present', 'fifthBlock')}></input></p>
						<a onClick={this.handleChangePage.bind(null, 'pageSix')} className="btn btn-primary">Next</a>	
					</div>
					<CodeBoard codeDisplay={this.state.codeDisplay} storyProperties={this.state.storyProperties} />
				</div>
			</div>

		)
	}
});


React.render(<Main />, document.getElementById('app'));