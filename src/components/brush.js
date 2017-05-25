import React from 'react'

class Brush extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.paint(this.draw);
	}

	handleClick(){
		this.props.setOption('brush');
	}

	draw(x,y,cxt,color,size,state){
		if(!state){
			cxt.beginPath();
			cxt.moveTo(x,y);
		}else{
			cxt.lineTo(x,y);
			cxt.strokeStyle = color;
			cxt.lineCap = 'round';
			cxt.lineWidth = size;
			cxt.stroke();
		}
	}

	render(){
		return(
			<div className="ops">
				<div className="inner brush" onClick={this.handleClick.bind(this)}></div>
			</div>
		);
	}

}

export default Brush