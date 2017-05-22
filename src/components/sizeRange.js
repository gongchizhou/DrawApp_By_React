import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SizeRange extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const input = this.refs.size;
		input.value = 1;
	}

	handleChange(){
		let size = this.refs.size.value;
		this.props.setSize(size);
	}

	render(){
		return(
			<div className="ops ctrl">
				<div className="inner">
					<input type="range" ref="size" min="1" max="20" step="1" onChange={this.handleChange.bind(this)}/>
				</div>
			</div>
		);
	}

}

export default SizeRange;