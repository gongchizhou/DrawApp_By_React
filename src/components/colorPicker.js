import React from 'react'

class ColorPicker extends React.Component{
	constructor(props){
		super(props);
	}

	handleChange(){
		let color = this.refs.color.value;
		this.props.setColor(color);
		this.refs.view.style.backgroundColor = color;
	}

	render(){
		return(
			<div className="ops ctrl">
				<div className="inner">
					<label className="color" htmlFor="color" ref="view"></label>
					<input type="color" ref="color" id="color" onChange={this.handleChange.bind(this)}/>
				</div>
			</div>
		);
	}

}

export default ColorPicker