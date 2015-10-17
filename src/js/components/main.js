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
					meanPerson: '',
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
				},

				mode: {
					inputMode: true,
					storyMode: false
				},
				storyChoices: {
					choiceOne: ''
				},
				storyMode: {
					pageOne: true,
					pageTwoLeft: false,
					pageTwoRight: false,
					obstacleBeat: false,
					obstacleFailed: false,
					pageThree: false,
					pageFour: false
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

		var codeDisplay = this.state.codeDisplay;

		storyProperties[property] = event.target.value;
		codeDisplay[block] = true;

		this.setState({
				storyProperties: storyProperties,
				codeDisplay: codeDisplay

		});



	},

	handleStoryChoice: function(choice, page) {

		var choiceString = ''
		var storyMode = {};


		switch(choice) {
			case 'left':
				storyMode[page] = true;

				this.setState({
					storyMode: storyMode
				});
				break;
			case 'right':
				storyMode[page] = true;

				this.setState({
					storyMode: storyMode
				});
				break;
			case 'obstacle':
				var success = Math.floor(Math.random() * 2);
				if(success == 1) {
					storyMode[obstacleBeat] = true;
					this.setState({
						storyMode: storyMode
					});
				}
				else {
					storyMode[obstacleFailed] = true;
					this.setState({
						storyMode: storyMode
					});
				}
				break;
			default: 
				return true;

		}

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
				storyDisplay[page] = 'There are rooms to your left and your right. To your left is ' + this.state.storyProperties.leftRoom + ' and to the right is ' + this.state.storyProperties.rightRoom;
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
			case 'pageSix':
				this.setState({
					mode: {
						inputMode: false,
						storyMode: true
					}
				});
				console.log(this.state.mode);
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

		return (
			<div>
				<div className={this.state.inputMode ? 'container' : 'container hidden'}>
					<StoryBoard storyDisplay={this.state.storyDisplay} storyProperties={this.state.storyProperties} storyVisible={this.state.storyVisible} />
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
							<p>Okay, let us go back to the door on the right.  Behind that door, {this.state.storyProperties.rightRoom}, there are two people, one mean and one nice.</p>
							<p>Who is the mean person? <input type="text" value={this.state.storyProperties.meanPerson} onChange={this.handleInput.bind(null, 'meanPerson', 'thirdBlock')}></input></p>
							<p>Who is the nice person? <input type="text" value={this.state.storyProperties.nicePerson} onChange={this.handleInput.bind(null, 'nicePerson', 'thirdBlock')}></input></p>
							<a onClick={this.handleChangePage.bind(null, 'pageFour')} className="btn btn-primary">Next</a>	
						</div>
						<div className={this.state.inputPage.pageFour ? 'card' : 'hidden card'}>
							<p>If you talk to the mean person, they hand you an envelope.  You suspect it is full of poison, but just to be sure you open it.  What is inside?  <input type="text" value={this.state.storyProperties.envelope} onChange={this.handleInput.bind(null, 'envelope', 'fourthBlock')}></input></p>
							<p>If you talk to the nice person, they are delighted to see you!  They give you a present.  What is in the present?  <input type="text" value={this.state.storyProperties.present} onChange={this.handleInput.bind(null, 'present', 'fourthBlock')}></input></p>
							<a onClick={this.handleChangePage.bind(null, 'pageFive')} className="btn btn-primary">Next</a>	
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
				<div className={this.state.mode.storyMode ? 'container' : 'container hidden'}>
					<div className={this.state.storyMode.pageOne ? 'card' : 'hidden card'}>
						<p>Your name is {this.state.storyProperties.name} and you are seeking {this.state.storyProperties.lookingFor}</p>
						<p>There are rooms to your left and your right. To the left is {this.state.storyProperties.leftRoom} and to the right is {this.state.storyProperties.rightRoom}</p>
						<p>Which way do you choose?</p>
						<p><button className="btn btn-primary" onClick={this.handleStoryChoice.bind(null, 'left', 'pageTwoLeft')}>Left</button><button className="btn btn-primary" onClick={this.handleStoryChoice.bind(null, 'right', 'pageTwoRight')}>Right</button></p>
					</div>
					<div className={this.state.storyMode.pageTwoLeft ? 'card' : 'hidden card'}>
						<p>Congrats you are now in the {this.state.storyProperties.leftRoom}. Here you find a {this.state.storyProperties.obstacle}.</p>
						<p>Click the button to see if you beat the obstacle! <button className="btn btn-primary" onClick={this.handleStoryChoice.bind(null, 'obstacle', 'pageThree')}>Find out</button></p>
					</div>
					<div className={this.state.storyMode.obstacleBeat ? 'card' : 'hidden card'}>
						<p>OBSTACLE BEAT</p>
					</div>
					<div className={this.state.storyMode.obstacleFailed ? 'card' : 'hidden card'}>
						<p>OBSTACLE FAILED</p>
					</div>
					<div className={this.state.storyMode.pageTwoRight ? 'card' : 'hidden card'}>
						<p>Congrats you are now in the {this.state.storyProperties.rightRoom}</p>
					</div>
					<div className={this.state.storyMode.pageThreeLeft ? 'card' : 'hidden card'}>
					</div>
					<div className={this.state.storyMode.pageThreeRight ? 'card' : 'hidden card'}>
					</div>
					<div className={this.state.storyMode.pageFourLeft ? 'card' : 'hidden card'}>
					</div>
				</div>
			</div>


		)
	}
});


React.render(<Main />, document.getElementById('app'));