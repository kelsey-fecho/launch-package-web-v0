import React from 'react';
import {Button, TabPane, Row, Col, Card} from 'reactstrap';
import '../styles/App.css';
import mParticle from '@mparticle/web-sdk'



const IdentityEvents = (props) => {

  const identityRequest = (email, customerid) => {
    return(
      {userIdentities: {
        email: email,
        customerid: customerid
        }
      }
    )
  };

  const identityCallback = (firstname, lastname, age) => {
      var currentUser = mParticle.Identity.getCurrentUser();

      currentUser.setUserAttribute("$FirstName", firstname)
      currentUser.setUserAttribute("$LastName", lastname)
      currentUser.setUserAttribute("$Age", age)
  };

  return(
    <TabPane tabId="1">
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={()=> mParticle.Identity.login(identityRequest("tomhanks@example.com", "98937b1f-4f65-4a54-9a1c-6774197833d3"), identityCallback("Tom","Hanks", 63))}>
              Log In as Tom Hanks
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 6, offset: 3}}>
          <Card body>
            <Button onClick={()=> mParticle.Identity.login(identityRequest("merylstreep@example.com", "8c2a9408-2b3f-4a4e-84e7-fed1da18ec8d"), identityCallback("Meryl", "Streep", 70))}>
              Log In as Meryl Streep
            </Button>
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
}

export default IdentityEvents;
