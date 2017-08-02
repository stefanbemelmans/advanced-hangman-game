import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import Random from "random-words";
class App extends Component {
	constructor(){
		super();
		this.state = {
			wordToGuess: Random(),
			strikes:0,
			guess:"",
			correctGuesses: [] 
		};
	}
	
	setLength(length){
	this.setState({
				correctGuesses:  Array(length).fill('_')
			})
	}
	
		
	
	
	render() {

		this.setLength(this.state.wordToGuess);
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
					<input />
					<button>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
