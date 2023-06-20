import React from 'react';

class ErrorBoundry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError:false
		}
	}

	componentDidCatch(erroe, info) {
		this.setState({hasError:true});
	}

	render() {
		if(this.state.hasError) {
			return <h1>website has problem message the supporter</h1>
		} return this.props.children;
	}
}

export default ErrorBoundry;