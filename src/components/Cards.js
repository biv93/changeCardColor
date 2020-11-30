import React, { Component } from 'react'
import cards from '../data/assets/card.json'
import Infopoint from './Infopoint';
import ButtonColors from './ButtonColors';
import TextContainer from './TextContainer';
import Header from './layout/Header';

class Cards extends Component {
    constructor(props){
    super(props);
    this.state = {
        cards,
        cardSfondo:'white',
        colorText:'black',
        hover:false,
        idText:'h2',
        cid:null
    }
}
    handleColor = (coloreBtn,keyIndex) =>{
        this.setState({
            cardSfondo: coloreBtn,
            colorText: 'white',
            keyIndex
        })
    }
            
    mouseOff = ()=>{
        this.setState({ 
        cardSfondo: null,
        colorText: null,
        });
    }
    render(){
        return(
                <div className="App">
                    <Header/> 
                    {
                    this.state.cards.map( (card) => {
                        const classeState= {
                            fontFamily:card.nomeFont,
                            backgroundColor:(this.state.keyIndex === card.id && this.state.cardSfondo),
                            color:(this.state.keyIndex === card.id && this.state.colorText),
                            transitionDuration:(this.state.keyIndex === card.id && '0.7s')
                        }
                        return (
                        <div 
                            key={card.id}
                            className="Cards"
                            style={classeState}
                            id={card.id}>
                            <div className="btnBlock">
                            <Infopoint info="infopoint"/>
                            <h4>contrast:</h4>
                            <ButtonColors  
                                handleColor={this.handleColor} 
                                mouseOff={this.mouseOff}
                                colori={card.contrast}
                                i={card.id}/>
                        </div>
                            <TextContainer
                                nomeFont={card.nomeFont} 
                                text={card.descr} 
                                />
                        </div>
                        )
                    })
                    }
        </div>
                    
        )
    }
}

export default Cards