import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Mass extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.drawMass(this.draw);
	}

	handleClick(){
		this.props.setOption('mass');
	}

	draw(x,y,start_pt,cxt,color,size){
		let dist = Math.sqrt((start_pt.x - x)*(start_pt.x - x) + (start_pt.y - y)*(start_pt.y - y));

		let rad = Math.atan2(y - start_pt.y,x - start_pt.x);

		let x1 = start_pt.x + dist * Math.cos(rad);
		let y1 = start_pt.y + dist * Math.sin(rad);

		let x2 = start_pt.x + dist * Math.cos(Math.PI + rad);
		let y2 = start_pt.y + dist * Math.sin(Math.PI + rad);

		cxt.beginPath();
		cxt.moveTo(x1,y1);
		cxt.lineTo(x2,y2);
		cxt.lineCap = 'butt';
		cxt.lineWidth = size;

		let r = parseInt(color.slice(1,3),16);
		let g = parseInt(color.slice(3,5),16);
		let b = parseInt(color.slice(5),16);
		cxt.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + Math.random() + ')';
		cxt.stroke();
	}

	render(){
		return(
			<div className="ops">
				<div className="inner mass" onClick={this.handleClick.bind(this)}></div>
			</div>
		);
	}

}

export default Mass;