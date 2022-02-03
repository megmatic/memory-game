import React, { Component } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard'

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø']
  let deck = []
  for (let i = 0; i < 16; i++) {
    deck.push({isFlipped: false, symbol: symbols[i % 8]})
  }
  deck = shuffle(deck);
  return deck;
}

function shuffle(deck) {
  let count = deck.length
  while(count) {
    deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0])
    count -= 1
  }
  return deck;
}

export default class App extends Component {
  constructor() {
    super()
    this.state = { deck: generateDeck(), pickedCards: []}
  }
  pickCard(cardIndex) {
    // console.log('this.state.deck')
    // console.log(this.state.deck)
    if (this.state.deck[cardIndex].isFlipped) {
      return
    }
    const cardToFlip = {...this.state.deck[cardIndex]}
    // console.log('cardToFlip')
    // console.log(cardToFlip)
    // console.log(`cardToFlip after flip`)
    // console.log(cardToFlip)
    let newPickedCards = this.state.pickedCards.concat(cardIndex)
    // console.log(`newPickedCards:`)
    // console.log(newPickedCards)
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        cardToFlip.isFlipped = true
        return cardToFlip
      }
      return card
    })
    console.log(`new deck: `)
    console.log(newDeck)
    // console.log('newPickedCards')
    // console.log(newPickedCards)
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0]
      const card2Index = newPickedCards[1]
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        // console.log("they don't match")
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000)
      }
      newPickedCards = []
    }
    this.setState({deck: newDeck, pickedCards: newPickedCards})
  }

  unflipCards(card1Index, card2Index) {
    const card1 = {...this.state.deck[card1Index]}
    const card2 = {...this.state.deck[card2Index]}
    console.log(card1)
    console.log(card2)
    let newDeck = this.state.deck.map((card, index) => {
      if( index === card1Index || index === card2Index) {
        card.isFlipped = false
      }
      return card
    })
    this.setState({ deck: newDeck }, () => {
      console.log(newDeck)
    })
  }

  // unflipCards = (card1Index, card2Index) => {
  //   let newDeck = this.state.deck.map((card, index) => {
  //     if(index === card1Index || index === card2Index){
  //       card.isFlipped = false;
  //     }
  //     return card;
  //   });
  //   this.setState({deck: newDeck});
  // }


  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard 
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />})
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <p>Match cards to win</p>
        </header>
        <div>
          {/* {Array(4).fill(<div>{Array(4).fill(<MemoryCard />)}</div>)} */}
          <div>{cardsJSX.slice(0,4)}</div>
          <div>{cardsJSX.slice(4,8)}</div>
          <div>{cardsJSX.slice(8,12)}</div>
          <div>{cardsJSX.slice(12,16)}</div>
        </div>
      </div>
    )
  }
}
