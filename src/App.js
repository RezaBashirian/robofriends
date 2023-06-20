import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';
import ErrorBoundry from './ErrorBoundry.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots:[],
			searchFild:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}))
	}

	onSearchChange = (event) => {
		this.setState({searchFild:event.target.value});
	}

	render() {
		const filterRobot = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchFild.toLowerCase());
		})
		if(this.state.robots.lenght === 0) {
			return <h1>Loading</h1>
		} else {
			return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {filterRobot}/>
					</ErrorBoundry>
				</Scroll>
			</div>
				)
			}	
		}
		
}

export default App;