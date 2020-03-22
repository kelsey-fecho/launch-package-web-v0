import React from 'react';
import {Button, TabPane, Row, Col, Card} from 'reactstrap';
import '../styles/App.css';
import mParticle from '@mparticle/web-sdk'



const CommerceEvents = (props) => {

  const product = mParticle.eCommerce.createProduct("Widget", "wid12358", 50.00)

  return(
    <TabPane tabId="2">
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={() => mParticle.eCommerce.logProductAction(mParticle.ProductActionType.ViewDetail, product)}>
            ProductViewDetail
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={() => mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToCart, product)}>
              Add To Cart
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={() => mParticle.eCommerce.logProductAction(mParticle.ProductActionType.RemoveFromCart, product)}>
              Remove From Cart
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={() => mParticle.eCommerce.logProductAction(mParticle.ProductActionType.Checkout, product)}>
              Checkout
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={() => mParticle.eCommerce.logPurchase({Id: Math.random()*1234, Revenue: 60.00, Tax: 10.00}, product)}>
              Purchase
            </Button>
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
}

export default CommerceEvents
