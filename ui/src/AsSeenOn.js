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
`

const ProductImageContainer = sc.img`
  margin-top: -200px;
`

const ProductImage = sc.img`
width: 700px;
margin-top: 0px;
`

class AsSeenOn extends Component {

  render() {
    return (
      <ProductContainer className="Product">
        <div>
          <ProductImage src="https://cache.net-a-porter.com/images/products/917633/917633_ou_xl.jpg" alt="" />
        </div>
        <div>
          <video width="600" autoPlay loop>
            <source src="http://video.net-a-porter.com/videos/productPage/940305_detail.mp4" />
          </video>
        </div>
      </ProductContainer>
    );
  }
}

export default AsSeenOn;
