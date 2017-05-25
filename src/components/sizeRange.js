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

	handleMouseDown(e){
		let left = parseInt(this.refs.handle.style.left||0)*this.state.totalen/100;
		this.setState({
			isDragging: true,
			startLeft: left,
			startX: e.clientX
		})
	}

	handleMouseMove(e){
		if(this.state.isDragging){
			let dist = this.state.startLeft + e.clientX - this.state.startX;
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

	handleMouseEnd(e){
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
						<div className="handle" ref="handle" style={{'left': this.state.percent + '%'}} onMouseDown={this.handleMouseDown.bind(this)} onMouseMove={this.handleMouseMove.bind(this)} onMouseUp={this.handleMouseEnd.bind(this)} onMouseOut={this.handleMouseEnd.bind(this)}></div>
					</div>
				</div>
			</div>
		);
	}

}

export default SizeRange


					


