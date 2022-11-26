import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TestClassComponent extends Component {
	constructor(props) {
		super(props);
		// super()=> this component won't be able to read props => this.props = undefined
		this.state = {
			userName: 'vishal',
			email: 'vncvish@gmail.com',
			mobile: '99999999999',
		};
	}

	componentDidMount() {
		console.log('DID MOUNT CALLED');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log({ prevState, state: this.state });
		if (this.state.userName !== prevState.userName) {
			console.log('STATE HAS BEEN CHANGED');
		}
	}

	componentWillUnmount() {
		console.log('UNMOUNT CALLED');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('SHOULD CALLED ', { nextProps, nextState, nextContext });
        // if(nextState.userName===)
	}

	handleNameChange = () => {
		this.setState({ userName: 'Yes i am here' }, () => {
			console.log('new state', this.state);
		});
	};

	render() {
		return (
			<div style={{ margin: '5em', border: '2px solid red' }}>
				{console.log('RENDER CALLED')}
				TestClassComponent
				<Link to={'/'}>HOME </Link>
				<button onClick={this.handleNameChange}>Update the name</button>
			</div>
		);
	}
}

// const TestClassComponent = (props) => {
// const [name,setName]=useState('vishal')
// useEffect(()=>{},[])=>componentDidMount
// useEffect(()=>{},[deps])=>componentDidUpdate
//   return (
//     <div>TestClassComponent</div>
//   )
// }

export default TestClassComponent;
