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

// class MemoryCard extends React.Component {
//     render() {
//         let memoryCardInnerClass = 
//         (this.props.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner');

//         return(
//             <div className="MemoryCard" onClick={this.props.pickedCard}>
//                 <div className={memoryCardInnerClass}>
//                     <div className="MemoryCardBack">
//                         <img src="./digitalcrafts-logo-white-y.png"></img>
//                     </div>
//                     <div className="MemoryCardFront">
//                         {this.props.symbol}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

// }



// export default MemoryCard;

