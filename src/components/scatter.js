import React from 'react';
import ReactDOM from 'react-dom';

class Scatter extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.drawScatter(this.draw);
	}

	handleClick(){
		this.props.setOption('scatter');
	}

	draw(x,y,cxt,color,size){
		cxt.beginPath();
		let cx = x + 20 * Math.pow(-1,Math.round(Math.random())) * Math.random();
		let cy = y + 20 * Math.pow(-1,Math.round(Math.random())) * Math.random();
		let cr = 2 * size * Math.random();
		cxt.arc(cx,cy,cr,0,2*Math.PI);

		let r = parseInt(color.slice(1,3),16);
		let g = parseInt(color.slice(3,5),16);
		let b = parseInt(color.slice(5),16);
		cxt.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + Math.random() + ')';
		cxt.fill();
	}

	render(){
		return(
			<div className="ops">
				<div className="inner scatter" onClick={this.handleClick.bind(this)}></div>
			</div>
		);
	}

}

export default Scatter;