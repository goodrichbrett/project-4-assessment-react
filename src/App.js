import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

const circleNo = ['0', '1', '2', '3'];

class App extends Component {
	state = {
		circleIdx: 0,
	};

	handleToggleCircle = (idx) => {
		this.setState({ circleIdx: idx });
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
				<main>
					<CircleSelector
						circleNo={circleNo}
						circleIdx={this.state.circleIdx}
						handleToggleCircle={this.handleToggleCircle}
					/>
					<Circles
						circleNo={circleNo}
						circleIdx={this.state.circleIdx}
						handleToggleCircle={this.handleToggleCircle}
					/>
				</main>
			</div>
		);
	}
}

export default App;
