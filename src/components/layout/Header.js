import React from 'react'
import Suggestion from '../Suggestion'

const Header = () => {
    return (
        <header id="header">
           <nav>
               <h1>Change card colors</h1>
                <ul>
                    <li>
                        menu
                    </li>
                    <li>
                        <i className="fa fa-sun-o"></i>
                    </li>
                </ul>
           </nav>
            <Suggestion />
        </header>
    )
}

export default Header
