import React, { Component } from 'react';
import sc from 'styled-components';

const ProductContainer = sc.div`
  display: flex;
  justify-content: center;
`

const ProductDetails = sc.div`
  height: 700px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  align-items: center;
  align-items: center;
  text-align: center;
  padding: 130px;
  margin-top: -200px;

  h2 {
    font-family: 'Chronicle';
    font-size: 40px;
  }

  h1 {
    font-family: 'Akkurat';
    font-weight: lighter;
  }

  h4 {
    font-size: 30px;
    margin-top: 10px;
    font-family: 'Chronicle';
  }
`

const ProductImageContainer = sc.img`
  margin-top: -200px;
`

const ProductImage = sc.img`
  width: 600px;
  margin-top: -150px;
  margin-right: 10px;
`

class Product extends Component {

  render() {
    return (
      <ProductContainer className="Product">
        <ProductDetails>
          <h1>Sunset textured-leather shoulder bag</h1>
          <h2>Saint Laurent</h2>
          <h4>£1050</h4>
        </ProductDetails>
        <div>
          <ProductImage src="https://cache.net-a-porter.com/images/products/917633/917633_in_xl.jpg" alt="" />
        </div>
      </ProductContainer>
    );
  }
}

export default Product;
