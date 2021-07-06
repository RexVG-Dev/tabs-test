import React from "react";
import {Form, Row, Col} from 'react-bootstrap';
import { StateProgressModel } from './models/state-progress-model';

const StateProgressProject = () => {

  const listTabStateProgress: StateProgressModel[] = [
    {
      descripAmount: 'instalfaenas y obras',
      quantityTotalCost: 949,
      percentTotalCost: 1.71,
      quantityProgressToday: 618,
      percentProgressToday: 69.99,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 618,
      percentProgressPeriod: 65.12
    },
    {
      descripAmount: 'urb terreno en',
      quantityTotalCost: 4542,
      percentTotalCost: 7.93,
      quantityProgressToday: 77,
      percentProgressToday: 1.88,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 77,
      percentProgressPeriod: 1.70
    },
    {
      descripAmount: 'edificación',
      quantityTotalCost: 40849,
      percentTotalCost: 76.85,
      quantityProgressToday: 1559,
      percentProgressToday: 3.92,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 1559,
      percentProgressPeriod: 3.82
    },
    {
      descripAmount: 'gastos gral directo',
      quantityTotalCost: 5447,
      percentTotalCost: 12.23,
      quantityProgressToday: 407,
      percentProgressToday: 6.43,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 407,
      percentProgressPeriod: 7.47
    },
    {
      descripAmount: 'honorarios empresa',
      quantityTotalCost: 2723,
      percentTotalCost: 0,
      quantityProgressToday: 0,
      percentProgressToday: 0,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 0,
      percentProgressPeriod: 0
    },
    {
      descripAmount: 'otros',
      quantityTotalCost: 0,
      percentTotalCost: 1.29,
      quantityProgressToday: 666,
      percentProgressToday: 100,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 666,
      percentProgressPeriod: 66600
    },
    {
      descripAmount: 'iva',
      quantityTotalCost: 0,
      percentTotalCost: 0,
      quantityProgressToday: 0,
      percentProgressToday: 0,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 0,
      percentProgressPeriod: 0
    },
    {
      descripAmount: 'avance exigido',
      quantityTotalCost: 0,
      percentTotalCost: 0,
      quantityProgressToday: 0,
      percentProgressToday: 0,
      quantityLastProgress: 0,
      percentLastProgress:0,
      quantityProgressPeriod: 0,
      percentProgressPeriod: 0
    }
  ];

  const titlesTable: string[] = [
    'Costo Total del Proyecto',
    'Total Avance a la Fecha',
    'Total Avance Anterior',
    'Total Avance del Período'
  ];


  return (
    <div className="container py-5">
      <div className="border-cell pt-3 px-2 border-radius-5px">
        <Form>
          <Row>
            <Col className="col-3">
              <Form.Group as={Row} className="mb-3" controlId="nameClient">
                <Form.Label column sm="6">
                  No. Avance
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </Col>
            <Col className="col-4">
              <Form.Group as={Row} className="mb-3" controlId="routeClient">
                <Form.Label column sm="6">
                  Fecha de Inspección
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="date" />
                </Col>
              </Form.Group>
            </Col>
            <Col className="col-5">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="nameProjectClient"
              >
                <Form.Label column sm="3">
                  Moneda
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="pt-3">
        <div className="table table-hover">
          <div className="width-100 d-flex">
            <div className="width-30 border-cell">
              <span>Partidas/Montos</span>
            </div>
            {titlesTable.map(title => (
              <div className="width-30 border-cell">
                <div>
                  <span>{title}</span>
                </div>
                <div className="d-flex border-cell-top">
                  <div className="width-70"></div>
                  <div className="width-40 border-cell-left">%Inc</div>
                </div>
              </div>
            ))}
          </div>
          {
            listTabStateProgress.map(rowElement => {
              return(
                <div className="width-100 d-flex">
                  <div className="width-30 border-cell">
                    <span>{rowElement.descripAmount}</span>
                  </div>
                  <div className="width-30 d-flex">
                    <div className="width-70 border-cell">{(rowElement.quantityTotalCost).toFixed(2)}</div>
                    <div className="width-40 border-cell">{(rowElement.percentTotalCost).toFixed(2)}</div>
                  </div>
                  <div className="width-30 d-flex">
                    <div className="width-70 border-cell">{(rowElement.quantityProgressToday).toFixed(2)}</div>
                    <div className="width-40 border-cell">{(rowElement.percentProgressToday).toFixed(2)}</div>
                  </div>
                  <div className="width-30 d-flex">
                    <div className="width-70 border-cell">{(rowElement.quantityLastProgress).toFixed(2)}</div>
                    <div className="width-40 border-cell">{(rowElement.percentLastProgress).toFixed(2)}</div>
                  </div>
                  <div className="width-30 d-flex">
                    <div className="width-70 border-cell">{(rowElement.quantityProgressPeriod).toFixed(2)}</div>
                    <div className="width-40 border-cell">{(rowElement.percentProgressPeriod).toFixed(2)}</div>
                  </div>
                </div>
              )
            })
          }
          
        </div>
        
      </div>
    </div>
  );
};

export default StateProgressProject;
