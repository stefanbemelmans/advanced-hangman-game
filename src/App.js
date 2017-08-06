import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import Random from "random-words";
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			wordToGuess: [],
			strikes:0,
			guess:"",
			correctGuesses:  [],
			bad: [],
			checkForWin: false
		};
		this.guess = this.guess.bind(this);
		this.reset = this.reset.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

//A great learning moment regarding component life-cycle, I was previously a little confused about componentDidMount, but it's just init and then set. The willMount and didMount are still a mystery tho.
	componentDidMount() {
		const randomWord = Random();
		let length = Array(randomWord.length).fill('_');
		this.setState({
				wordToGuess: randomWord.split(''),
				correctGuesses: length
			})


		console.log(this.state);



	}
//you can type more than one letter but I'll only except the first one.
handleChange(e)  {
	let inputAr;
		if(e.target.value.length > 1){
			inputAr = e.target.value.split('');
			alert("One Letter Only")
			e.target.value = inputAr[0];
			this.setState({
				guess: inputAr[0]
			})
		}else{
			this.setState({
			guess: e.target.value
		})
	}
}

checkWin() {

	if(this.state.wordToGuess.join('').length === 0){

		return true;
	}
}


reset(){
	const randomWord = Random();
	let newBad = [];
	let length = Array(randomWord.length).fill('_');
	this.setState({
			wordToGuess: randomWord.split(''),
			correctGuesses: length,
			bad: newBad,
			strikes: 0

		})
	console.log(this.state);
}

//I think there's a shorter way to write this.
guess(){
		let letIdx;
		let guess = this.state.guess;
		let charArray = this.state.wordToGuess;
		let guessCopy = this.state.correctGuesses.slice();
		let strikes = this.state.strikes;
		let bad = this.state.bad.slice();

		if(this.state.bad.includes(this.guess)){
			alert("You've guessed that already");
			}
		document.getElementById('input').value='';

		if(charArray.includes(guess)){
			letIdx = charArray.indexOf(guess);
			guessCopy[letIdx] = guess;
			charArray[letIdx] = "";
			this.setState({
				correctGuesses: guessCopy,
				guess: '',
				wordToGuess: charArray,
				checkForWin: true
			})
			if(this.state.checkForWin){
				this.checkWin();
			}
		}
		else{
			strikes += 1;
			bad.push(guess);
			this.setState({
				bad: bad,
				strikes: strikes,
				guess: ""
			})
		}

	};
	render() {
		let spans = [<span>_</span>];
		let guessed;
		let className;
		if(this.state.bad.length > 0){
		 guessed = this.state.bad.join('-');
		}else{
		 guessed = null;
		}
				
		className = `strike-${this.state.strikes}`

		if(this.state.checkForWin){
			if(this.checkWin()){
				className ="gamewon";
				guessed = "You Win! click to reset";
			}
			else if (this.state.strikes === 5) {
				className ="gameover";
				guessed ="You Lose! click to reset";

			}
		};
	
		return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div className="words">
					<div className="corGuess">{this.state.correctGuesses.join('-')}</div>
					<div>
						<input id="input" onChange={this.handleChange} />
						<button onClick={this.guess}>Guess</button>
					</div>
					<div className="guessed" onClick={this.reset}>{guessed}</div>
				</div>


			</div>
    );
  }
}

export default App;
