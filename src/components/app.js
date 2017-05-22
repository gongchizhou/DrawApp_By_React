import React from 'react'
import Canvas from './Canvas'
import Brush from './Brush'
import Eraser from './Eraser'
import Scatter from './Scatter'
import Mass from './Mass'
import ColorPicker from './ColorPicker'
import SizeRange from './SizeRange'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			option: 'brush',
			color: '#000000',//must be Hex full name
			size: 1
		};
	}

	setOption(ops){
		this.setState({
			option: ops
		})
	}

	setColor(color){
		this.setState({
			color: color
		})
	}

	setSize(size){
		this.setState({
			size: size
		})
	}

	paint(func){
		this.setState({
			paint: func
		})		
	}

	clear(func){
		this.setState({
			clear: func
		})		
	}

	drawScatter(func){
		this.setState({
			drawScatter: func
		})		
	}

	drawMass(func){
		this.setState({
			drawMass: func
		})		
	}

	render(){
		return (
		<div id="content">
			<Canvas 
			option={this.state.option}
			color={this.state.color} 
			size={this.state.size} 
			paint={this.state.paint} 
			clear={this.state.clear} 
			drawScatter={this.state.drawScatter} 
			drawMass={this.state.drawMass}/>

			<Brush 
			setOption={ ops => this.setOption(ops)} 
			paint={ f => this.paint(f)}/>

			<Eraser 
			setOption={ ops => this.setOption(ops)} 
			clear={ f => this.clear(f)}/>

			<Scatter 
			setOption={ ops => this.setOption(ops)} 
			drawScatter={ f => this.drawScatter(f)}/>
			
			<Mass 
			setOption={ ops => this.setOption(ops)} 
			drawMass={ f => this.drawMass(f)}/>

			<SizeRange setSize={ s => this.setSize(s)}/>
			<ColorPicker setColor={ c => this.setColor(c)}/>
		</div>
		);
	}

}

export default App
