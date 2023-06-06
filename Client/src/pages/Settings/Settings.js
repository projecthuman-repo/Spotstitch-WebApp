import { Col, Container, Row, Card } from "react-bootstrap";
import { useState } from "react";
import General from "./General";
import Account from "./Account";
import Security from "./Security";

import './settings.css'
import PageNav from "../../components/pageNav/PageNav";
import PageSide from "../../components/pageNav/PageSide";

function Settings() {
  const tabs = ['General', 'Account', 'Security']
  const tabComponents = [<General />, <Account />, <Security />]


  const [currentTab, setCurrentTab] = useState(0)


  return (

    <Container className="my-4">
      <Row>

        <PageNav options={['Settings']} />


        <Col lg={3}>
          <PageSide options={tabs} tab={currentTab} tabFn={setCurrentTab} />
        </Col>

        <Col lg={9}>
          {tabComponents[currentTab]}
        </Col>


      </Row>
    </Container>

  );
}

export default Settings;
