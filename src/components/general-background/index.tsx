import React, {Fragment} from 'react';
import {Nav} from 'react-bootstrap';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import Resume from '../tabs-gral-bg/resume';
import VarGD from '../tabs-gral-bg/var-gd';
import Marketing from '../tabs-gral-bg/marketing';

const GeneralBackground: React.FC = () => {

  const history = useHistory();
  return(
    <Fragment>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => {history.push('/general-background/resume')}}>Resumen</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {history.push('/general-background/var-gd')}}>Var. G.D.</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {history.push('/general-background/marketing')}}>Comercialización</Nav.Link>
        </Nav.Item>
      </Nav>

      <Switch>
          <Route exact path="/general-background/resume" component={Resume}/>
          <Route exact path="/general-background/var-gd" component={VarGD}/>
          <Route exact path="/general-background/marketing" component={Marketing}/>
      </Switch>
    </Fragment>
  );
}

export default GeneralBackground;