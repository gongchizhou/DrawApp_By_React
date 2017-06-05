import React from 'react'
import ReactDOM from 'react-dom'

class Canvas extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			enable: false,
			start: false
		};
	}

	componentDidMount(){
		this.setUp();
//canvas.addEventListener('mousedown',this.start.bind(this));
		window.addEventListener('resize',this.setUp.bind(this));
	}

	setUp(){
		const canvas = ReactDOM.findDOMNode(this);
		canvas.width = window.innerWidth - 10;
		canvas.height = 0.8 * window.innerHeight;
		if(window.innerWidth < 768)	{
			canvas.height = 0.7 * window.innerHeight;
		}
	}

	start(e){
		this.setState({ 
			enable: true,
			x: e.clientX || e.touches[0].clientX,
			y: e.clientY || e.touches[0].clientY,
			start_pt: {
				x: e.clientX || e.touches[0].clientX,
				y: e.clientY || e.touches[0].clientY
				}
		});

		this.draw();
		
	}

	move(e){
		if(this.state.enable){
			this.setState({ 
				start: true,
				x: e.clientX || e.touches[0].clientX,
				y: e.clientY || e.touches[0].clientY
			});
			
			this.draw();
		}
		e.preventDefault();
	}

	end(e){
		this.setState({ 
			enable: false,
			start: false,
			x: undefined,
			y: undefined,
			start_pt: undefined
		});
	}

	draw(){
		const canvas = ReactDOM.findDOMNode(this);
		const cxt = canvas.getContext('2d');

		let color = this.props.color;
		let size = this.props.size;

		let option = this.props.option;
		let state = this.state.start;

		let [x,y,start_pt]= [this.state.x,this.state.y,this.state.start_pt];

		switch(option){
			case 'brush':
				this.props.paint(x,y,cxt,color,size,state);
				break;
			case 'eraser':
				this.props.clear(x,y,cxt,size,state);
				break;
			case 'scatter':
				this.props.drawScatter(x,y,cxt,color,size);
				break;
			case 'mass':
				this.props.drawMass(x,y,start_pt,cxt,color,size);
				break;
		}
	}

	render(){
		return (
		<canvas id="canvas" 
		onMouseDown={this.start.bind(this)}
		onMouseMove={this.move.bind(this)}
		onMouseUp={this.end.bind(this)}
		onMouseOut={this.end.bind(this)}
		onTouchStart={this.start.bind(this)}
		onTouchMove={this.move.bind(this)}
		onTouchEnd={this.end.bind(this)}
		/>
		);
	}

}

export default Canvas
