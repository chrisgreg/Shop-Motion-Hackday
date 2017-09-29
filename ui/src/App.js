import React, { Component } from 'react';
import Slider from 'nuka-carousel';
import Websocket from 'react-websocket';
import sc from 'styled-components';

import Product from './Product'
import Designer from './Designer'
import AsSeenOn from './AsSeenOn'
import BuyIt from './BuyIt'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';

const Container = sc.div`
`

const BuyContainer = sc.div`
  width: 100vw;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  opacity: ${(props) => props.buy ? '0.9' : '0' };
  transform: ${(props) => props.buy ? 'translateY(0px);' : 'translateY(1000px);' }
  transition: all 0.4s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Chronicle';

  h1 {
    font-size:60px;
  }

  h2 {
    font-size: 30px;
    font-weight: normal;
  }
`


const HelpContainer = sc.div`
  width: 100vw;
  height: 100vh;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  opacity: ${(props) => props.help ? '0.9' : '0' };
  transform: ${(props) => props.help ? 'translateY(0px);' : 'translateY(-1000px);' }
  transition: all 0.4s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Chronicle';

  h1 {
    font-size:60px;
  }

  h2 {
    font-size: 30px;
    font-weight: normal;
  }
`


class App extends Component {

  getInitialState() {
    return {
      slideIndex: 0
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
      buy: false,
      help: false
    }
  }

  handleData = (data) => {
    console.log(data);
    let { slideIndex, buy, help } = this.state;

    switch (data) {
      case 'left':
        if (slideIndex < 3) {
          const newNumber = slideIndex + 1;
          this.setState({ slideIndex: newNumber })
        }
        break;
      case 'right':
        if (slideIndex > 0) {
          const newNumber = slideIndex - 1;
          this.setState({ slideIndex: newNumber })
        }
        break;
      case 'up':
        if (help === true) {
          this.setState({buy: false, help: false})
        } else {
          this.setState({buy: true, help: false})
        }
        break;
      case 'down':
        if (buy === true) {
          this.setState({buy: false, help: false})
        } else {
          this.setState({buy: false, help: true})
        }
        break;
      default:

    }
  }

  render() {

    const settings = {
      dots: true
    };

    return (
      <Container>
        <Websocket url='ws://127.0.0.1:4545' onMessage={this.handleData.bind(this)}/>
        <Slider
          slideIndex={this.state.slideIndex}>
          <Product />
          <Designer />
          <AsSeenOn />
          <Product />
        </Slider>

        <HelpContainer help={this.state.help}>
          <h1>Assistance is on the way</h1>
        </HelpContainer>

        <BuyContainer buy={this.state.buy}>
          <h2>Success!</h2>
          <h2>This item has been reserved for you. <br></br>When you are ready to complete your purchases, quote this code at the till:</h2>
          <h1>Bardot</h1>
        </BuyContainer>

      </Container>
    );
  }
}

export default App;
