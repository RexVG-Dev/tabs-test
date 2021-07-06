import React from "react";
import { MarketingModel } from "./models/marketing-model";
import { Row, Form, Col } from "react-bootstrap";

const Marketing = () => {
  const marketingList: MarketingModel[] = [
    {
      id: "agwqje",
      description: "Unidades comprometidas No.",
      quantity: 8,
      destiny: "flujo ajustado",
      amount: 6432.0,
    },
    {
      id: "bcskea",
      description: "Unidades por comercializar No.",
      quantity: 34,
      destiny: "flujo ajustado",
      amount: 94878.0,
    },
    {
      id: "cksjwq",
      description: "Monto crédito antes de inicio de bonos",
      amount: 56226.52,
    },
  ];

  const debt: number = 56226.52;
  const flows: number = 101310;
  const relatedFlow: number = 1.8;
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Partida</th>
            <th></th>
            <th>Destino</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {marketingList.map((rowElemet) => (
            <tr key={rowElemet.id}>
              <th
                className="border-cell"
                scope="col"
                colSpan={rowElemet.quantity ? 1 : 3}
              >
                {rowElemet.description}
              </th>
              {rowElemet.quantity ? (
                <th className="border-cell" scope="col">
                  {rowElemet.quantity}
                </th>
              ) : null}
              {rowElemet.destiny ? (
                <th scope="col">{rowElemet.destiny}</th>
              ) : null}
              <th className="border-cell" scope="col">
                {rowElemet.amount.toFixed(2)}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex flex-row-reverse bg-grey">
        <div className="col-9">
          <Row>
            <Form.Label column="lg" lg={7}>
              Deuda "(Cred. Propuesto + Carga Financiera)"
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" readOnly defaultValue={debt} />
            </Col>
          </Row>
          <Row>
            <Form.Label column="lg" lg={7}>
              Flujos Ajustados
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" readOnly defaultValue={flows} />
            </Col>
          </Row>
          <Row>
            <Form.Label column="lg" lg={7}>
              Relación Flujo Ajustado Deuda
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" readOnly defaultValue={relatedFlow}/>
            </Col>
          </Row>
        </div>
      </div>
      <div className="d-flex justify-content-start mt-3"><h5>* Información histórica según solicitud</h5></div>
    </div>
  );
};

export default Marketing;
