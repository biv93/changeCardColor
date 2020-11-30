import React, { Component } from 'react'
import { Droplist } from './Droplist'

class Infopoint extends Component {
    state = {
        display:false,
        height:false,
    }
  
      handlerDropList = () =>{
          this.setState( prevState => ({
            display: !prevState.display,
            height: !prevState.height
          }))
      }
  
      render(){
        return(
          <div className="infoContainer">
            <i
                className={`${(this.state.display) ? 'fa fa-times' : 'fa fa-ellipsis-v'} ${this.props.info}`}
                aria-hidden="true"
                onClick={this.handlerDropList}></i>
                <Droplist display={this.state.display} />
          </div>
        )
      }
}

export default Infopoint
