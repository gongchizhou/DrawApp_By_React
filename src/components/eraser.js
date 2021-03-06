import React from 'react'

class Eraser extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.clear(this.draw);
	}

	handleClick(){
		this.props.setOption('eraser');
	}

	draw(x,y,cxt,size,state){
		if(!state){
			cxt.beginPath();
			cxt.moveTo(x,y);
		}else{
			cxt.lineTo(x,y);
			cxt.strokeStyle = 'white';
			cxt.lineCap = 'round';
			cxt.lineWidth = 2*size;
			cxt.stroke();
		}
	}

	render(){
		return(
			<div className="ops">
				<div className="inner eraser" onClick={this.handleClick.bind(this)}></div>
			</div>
		);
	}

}

export default Eraser