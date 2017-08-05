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
			bad: []
		};

		this.bad = this.state.bad;
		this.strikes = this.state.strikes;
		this.handleChange = this.handleChange.bind(this);
		this.guess = this.guess.bind(this);
	}


	componentDidMount() {
		const randomWord = Random();

		let length = Array(randomWord.length).fill('_');
		this.setState({
				wordToGuess: randomWord,
				correctGuesses: length
			})
		console.log(this.state);

	}

	handleChange(e)  {
			if(e.target.value.length > 1){
				alert("One Letter Only")
			}else{
			this.setState({
				guess: e.target.value
			})
		}
	}

	guess(){
		let letIdx;
		let guess = this.state.guess;
		let charArray = this.state.wordToGuess.split('');
		let corrCopy = this.state.correctGuesses.slice();
		// let strikes = this.state.strikes;
		// let bad = this.state.bad.slice();
		if(this.state.bad.includes(guess)){
			alert("You've guessed that already");
		}
		document.getElementById('input').value='';
		
		if(charArray.includes(guess)){
			letIdx = charArray.indexOf(guess);
			corrCopy[letIdx] = guess;
			this.setState({
				correctGuesses: corrCopy,
				guess: ''
			})
			document.getElementById('input').value ="";
			console.log(this.state.correctGuesses);
		}
		else{
			this.strikes += 1;
			this.bad.push(guess);
			this.setState({
				bad: this.bad,
				strikes: this.strikes,
				guess: ""
			})
		}

	}
	render() {

		console.log(this.state.wordToGuess);
		console.log(this.state.correctGuesses);


		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];

		return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input id="input" onChange={this.handleChange} />
					<button onClick={this.guess}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
