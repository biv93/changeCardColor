import React, { Component } from 'react'
import  Tooltips from './Tooltips';
export class TextContainer extends Component {
   constructor(props){
       super(props)
       this.textSelect = React.createRef();
       this.titleSelect = React.createRef();
      
       this.state = {
           select: false,
           clientX:0,
           clientY:0,
           fontSizeTitle:22,
           fontSizeP:18,
           refState:null
       }
   }
    handleMouseUp = (e) => {
        if(window.getSelection().type !== 'None' && window.getSelection().type === 'Range'){
            console.log(getSelection())
            this.setState({
                select: !this.state.select,
                clientX:(e.target.localName === 'p') ? (this.textSelect.current.offsetLeft +80) : (this.titleSelect.current.offsetLeft -40),
                clientY:(e.target.localName === 'p') ? (this.textSelect.current.offsetTop -60) : (this.titleSelect.current.offsetTop -50) ,
                refState:((e.target.localName === 'p') ? ('p'): ('h2'))
            })
        }else{
            this.setState({
                select: false,
                clientX:0,
                clientY:0,
                refState:null
            })
        }
    }
    handleFont = (x) => {
        console.log(x)
        if(this.state.refState === 'p' && this.state.refState !== null){
            this.setState({
                fontSizeP:x,
            })
        }else{
            this.setState({
                fontSizeTitle:x,
            })
        }
    }
    render() {
        const {cardId,nomeFont,text} = this.props
        return (
            <div className={`testo-${this.state.clientY}`} >
                {this.state.select &&
                <Tooltips
                        left={this.state.clientX} 
                        top={this.state.clientY} 
                        f = {this.handleFont}
                        />}
                <h2 
                    id={cardId}
                    style={{fontSize:this.state.fontSizeTitle}}
                    ref={this.titleSelect}
                    onMouseUp={this.handleMouseUp}>
                    {nomeFont}
                </h2> 
                <p  
                    style={{fontSize:this.state.fontSizeP}}
                    ref={this.textSelect} 
                    onMouseUp={this.handleMouseUp}>
                    {text}
                </p>
            </div>
        )
    }
}

export default TextContainer
