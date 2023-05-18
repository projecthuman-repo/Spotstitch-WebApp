import { Col, Container, Row, Card } from "react-bootstrap";
import Navigation from "../../components/Navigation/Navigation";
import { useState } from "react";
import General from "./General";
import Account from "./Account";
import Security from "./Security";

function Settings() {
  const tabs = ['General', 'Account', 'Security']
  const [currentTab, setCurrentTab] = useState(tabs[0])


  return (
    <div>
      <Navigation />
      <Container className="my-4">
        <Row>
          <Col lg={12}>
            <Card className="mt-3 content-border-l round-s">
              <Card.Body className="nopadding">
                <div className="d-flex justify-content-evenly">
                  <button className={"btn-nav active p-3"}>
                    <p className="nopadding s-16 fw-500">Settings</p>
                  </button>
                </div>
              </Card.Body>
            </Card>

            <Row>
              <Col lg={3}>
                <Card className="my-3 content-border-l round-s">
                  <Card.Body className="nopadding">
                    <div className="d-flex row justify-content-center my-3" >
                      {tabs.map((tab) => {
                        return (
                          <Row className="nopadding my-1">
                            <Col >
                              <button className={currentTab == tab ? "btn light text-start w-100 px-3 py-1" : "btn text-start w-100 px-3 py-1"}
                                onClick={() => setCurrentTab(tab)}>
                                <p className="nopadding fs-16 fw-400"> {tab} </p>
                              </button>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={9}>
                <div><General />
                  <Account />
                  <Security /></div>
                  
                

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Settings;
