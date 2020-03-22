import React from 'react';
import {Button, TabPane, Row, Col, Card} from 'reactstrap';
import '../styles/App.css';
import mParticle from '@mparticle/web-sdk'

const CustomEvents = (props) => {

  return(
  <TabPane tabId="3">
    <Row>
      <Col sm={{size: 6, offset: 3}}>
        <Card body>
          <Button onClick={() => mParticle.logEvent('Share To Facebook', mParticle.EventType.Social, { 'Test key': 'Test value' })}>
            Share To Facebook
          </Button>
        </Card>
      </Col>
    </Row>
    <Col sm={{size: 6, offset: 3}}>
      <Card body>
        <Button onClick={() => mParticle.logEvent('Start Customer Service Request', mParticle.EventType.Search, { 'Test key': 'Test value' })}>
          Search for an item
        </Button>
      </Card>
    </Col>
    <Row>
      <Col sm={{size: 6, offset: 3}}>
        <Card body>
          <Button onClick={() => mParticle.logEvent('Modal Click', mParticle.EventType.Other, { 'Test key': 'Test value' })}>
            Modal Click
          </Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={{size: 6, offset: 3}}>
        <Card body>
          <Button onClick={() => mParticle.logEvent('Start Customer Service Request', mParticle.EventType.Other, { 'Test key': 'Test value' })}>
            Start Customer Service Request
          </Button>
        </Card>
      </Col>
    </Row>
  </TabPane>
);
}

export default CustomEvents
