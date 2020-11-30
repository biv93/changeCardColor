import React, { Component } from 'react'

class Tooltips extends Component {
    fontHandler = () => {
        console.log(33)
    }
    render() {
        const {left,top,f} = this.props
        return (
            <div 
                id="highlighted" 
                style={{
                    left:left,
                    top:top
                    }}>
                <button onClick={()=>f(33)}>h1</button>
                <button onClick={()=>f(22)}>h2</button>
                <button onClick={()=>f(18)}>h3</button>
                <button onClick={()=>f(15)}>h4</button>
                <button onClick={()=>f(18)}>p</button>
                <div id="triangle"></div>
            </div>
        )
    }
}
export default Tooltips