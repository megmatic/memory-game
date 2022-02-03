import './MemoryCard.css'
import React, { Component } from 'react';

export default class MemoryCard extends Component {
  render() {  
    return (
    <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={this.props.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner'}>
            <div className="MemoryCardBack">
                <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="a card"/>
            </div>
            <div className="MemoryCardFront">{this.props.symbol}</div>
        </div>
    </div>
    )    
  }
}
