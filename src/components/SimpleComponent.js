// Code SimpleComponent Here
import React from "react"

class SimpleComponent extends React.Component {
  state = {
      mood: "happy"
  }

  handleClick = (e) => {
//   debugger
  if (this.state.mood === "happy"){
      this.setState({
          mood: "sad"
      }) 
  }else if(this.state.mood === "sad"){
    this.setState({
        mood: "happy"
    })
  }
}
// this.setState({
//     mood: "sad"


// handleClick(ev){
    
//     const { mood } = this.state;
//     if (mood === 'happy'){
//       this.setState({ mood: 'sad' });
//     }else{
//       this.setState({ mood: 'happy' });
//     }
//   }

  render(){
      return(
          <div onClick={this.handleClick}>
              {this.state.mood}
              {/* <button 
                className="happy"
                onClick={this.handleClick}>
                 
              </button> */}
          </div>
      

          
      )
  }
}

export default SimpleComponent