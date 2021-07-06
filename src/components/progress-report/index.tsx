import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import {Nav} from 'react-bootstrap';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import StateProgressProject from "../tabs-progress-report/state-progress-project";
import Resume from "../tabs-gral-bg/resume";

const ProgressReport = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="border-cell pt-3 px-2 border-radius-5px">
        <Form>
          <Row>
            <Col className="col-5">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="nameClient"
              >
                <Form.Label column sm="2">
                  Cliente
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="routeClient"
              >
                <Form.Label column sm="2">
                  Rut
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col className="col-5">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="nameProjectClient"
              >
                <Form.Label column sm="4">
                  N. Proyecto
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
      
      <div className="border-cell pt-4">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={() => {history.push('/progress-report/start-progress-project')}}>Estado de avance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {history.push('/progress-report/resume')}}>Correción del Avance</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {history.push('/progress-report/resume')}}>Antecedentes de la Obra</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {history.push('/progress-report/resume')}}>Observaciones</Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/progress-report/start-progress-project" component={StateProgressProject}/>
          <Route exact path="/progress-report/resume" component={Resume}/>
        </Switch>
      </div>
    </div>
  );
};

export default ProgressReport;
