import React, { Component } from 'react';
import sc from 'styled-components';

const BuyContainer = sc.div`
  width: 100vw;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  transform: translateY(1000px);
`

class BuyIt extends Component {
  render() {
    return(
      <BuyContainer>
        Buy it now
      </BuyContainer>
    )
  }
}

export default BuyIt
