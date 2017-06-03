import React from 'react'

class SizeRange extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isDragging: false,
			maxRange: 20
		}
	}

	componentDidMount(){
		this.setUp();
		window.addEventListener('resize',this.setUp.bind(this));
	}

	setUp(){
		const totalen = this.refs.range.offsetWidth;
		this.setState({
			totalen: totalen
		});		
	}

	handleStart(e){
		let left = parseInt(this.refs.handle.style.left||0)*this.state.totalen/100;
		this.setState({
			isDragging: true,
			startLeft: left,
			startX: e.clientX || e.changeTouches[0].clientX
		})
	}

	handleMove(e){
		if(this.state.isDragging){
			let dist = this.state.startLeft + (e.clientX || e.changeTouches[0].clientX) - this.state.startX;
			if(dist<0){
				dist = 0;
			}
			if(dist>this.state.totalen){
				dist = this.state.totalen;
			}
			let percent = dist*100/this.state.totalen;
			this.setState({
				percent: percent
			})
			let size = Math.floor(this.state.percent*this.state.maxRange/100) + 1;
			this.props.setSize(size);
		}
		e.preventDefault();
	}

	handleEnd(e){
		this.setState({
			isDragging: false,
		})
	}

	render(){
		return(
			<div className="ops ctrl">
				<div className="inner">
					<div className="range" ref="range">
						<div className="track" ref="track" style={{'width': this.state.percent + '%'}}></div>
						<div className="handle" ref="handle" style={{'left': this.state.percent + '%'}} 
						onMouseDown={this.handleStart.bind(this)} 
						onMouseMove={this.handleMove.bind(this)} 
						onMouseUp={this.handleEnd.bind(this)} 
						onMouseOut={this.handleEnd.bind(this)}
						onTouchStart={this.handleStart.bind(this)}
						onTouchMove={this.handleMove.bind(this)}
						onTouchEnd={this.handleEnd.bind(this)} >
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default SizeRange


					


