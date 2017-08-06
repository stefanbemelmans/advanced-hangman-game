import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import Random from "random-words";
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			wordToGuess: "",
			strikes:0,
			guess:"",
			correctGuesses:  [],
			bad: [],
			dupes: ""
		};
//I guess this is like local variables...or global in the scope of the component?
// I just sort of did it this way to do it.
		// this.wordAr = this.state.wordToGuess.split('');
		// this.dupes = this.state.dupes;
		// this.bad = this.state.bad;
		// this.strikes = this.state.strikes;
		this.handleChange = this.handleChange.bind(this);
		this.guess = this.guess.bind(this);
		// this.checkWin = this.checkWin.bind(this);
	}


	componentDidMount() {
		const randomWord = 'hello';

		let length = Array("hello".length).fill('_');
		this.setState({
				wordToGuess: "hello".split(''),
				correctGuesses: length,
				//dupes: this.state.wordToGuess.match(/(.+)(?=\1)/g)this is the dupefinder returns letter if it's more than 1
			})

		console.log(this.state);



	}
//need to work out how to limit text input... "max-length"?
	handleChange(e)  {
			if(e.target.value.length > 1){
				alert("One Letter Only")
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


// 	reset(){
// 	const randomWord = Random();
// 	let newBad = [];
// 	let length = Array(randomWord.length).fill('_');
// 	this.setState({
// 			wordToGuess: randomWord,
// 			correctGuesses: length,
// 			bad: newBad
// 		})
// 	console.log(this.state);
// }

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
				wordToGuess: charArray
			})
			console.log(charArray);
			console.log(this.state.correctGuesses);
			console.log(this.state.wordToGuess);
		}
		else{
			this.strikes += 1;
			if(this.strikes === 6){alert("You Lose!")};
			bad.push(guess);
			this.setState({
				bad: bad,
				strikes: strikes,
				guess: ""
			})
		}

	}
	render() {
		let resbtn = checkWin() ? 'reset': 'guess';
		console.log(this.state.wordToGuess);
		console.log(this.state.correctGuesses);
		console.log(this.charArray);
		if(this.checkWin()){
			document.
			alert('You Win!');
			// this.reset();
		}

		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];
		let guessed;
		if(this.state.bad){
		 guessed = this.state.bad.join('-');
		}else{
		 guessed = null;
		}
		return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div className="words">
					<div className="corGuess">{this.state.correctGuesses.join('-')}</div>
					<div>
						<input id="input" onChange={this.handleChange} />
						<button onClick={`this.${resbtn}`}>Guess</button>
					</div>
					<div className="guessed">{guessed}</div>
				</div>


			</div>
    );
  }
}

export default App;
