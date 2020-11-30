import React from 'react'

export const Droplist = ({display}) => {
    return(
        <ul 
            className="droplistContainer" 
            style={{
                  listStyle:'none',
                  display:`${display ? 'block' : 'none'}`}}>
            <li>Esporta</li>
            <li>Font preferito</li>
            <li>Licenza</li>
        </ul>
      )
}
