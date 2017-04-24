import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";

class App extends Component {
	constructor(){
		super();
		this.state = {
			wordToGuess:"",
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
	}
  render() {
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
