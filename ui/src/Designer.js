import React, { Component } from 'react';
import sc from 'styled-components'

const DesignerContainer = sc.div`
  background-image: url("http://www.numero.com/sites/default/files/images/article/covers/ysl-portrait_style_yves_saint_laurent_love.tif_.jpg");
  height: 700px;
  background-size: contain;
  display: flex;
  justify-content: flex-end;
`

const DesignerDetails = sc.div`
  background: black;
  color: white;
  opacity: 0.7;
  height: 600px;
  width: 600px;
  margin: 50px;

  h3 {
    padding: 50px;
    font-size: 35px;
    padding-bottom: 0;
    margin-bottom: 0;
    text-transform: uppercase;
    font-family: 'Chronicle';
  }

  p {
    margin-top: 0;
    padding: 50px;
    font-size: 25px;
    font-family: 'Akkurat';
    line-height: 34px;
  }
`

const DesignerInfo = props => {
  return (
    <DesignerContainer>
      <div></div>
      <DesignerDetails>
        <h3>The Story of YSL</h3>
        <p>
          Founded in 1961, Yves Saint Laurent was the first couture house to introduce the concept of luxury prêt-à-porter with the 1966 ‘Rive Gauche’ collection, synonymous with youth and freedom.
          <br></br><br></br>Under the creative direction of Anthony Vaccarello since April 2016, Yves Saint Laurent continues to position itself at the summit of the luxury universe.
        </p>
      </DesignerDetails>
    </DesignerContainer>
  )
}

export default DesignerInfo;
