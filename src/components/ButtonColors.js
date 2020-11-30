import React from 'react'

 const ButtonColors = ({colori,handleColor,mouseOff,i}) => {
    return(
          colori.map(color => {
          return(
          <button 
          key={color}
          className="btn" 
          style={{backgroundColor:color}}
          onMouseEnter={()=> handleColor(color,i)}
          onMouseLeave={()=> mouseOff()}
          >{color}</button>
          )
      })
    )
}
export default ButtonColors;