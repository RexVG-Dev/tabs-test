import React, { useState, useEffect } from "react";
import { VarGDModel } from './models/var-gd-model';
import {Form} from 'react-bootstrap';

const VarGD = () => {
  const tabCons: VarGDModel[] = [
    {
      id: "znsgw",
      type: "garanty",
      description: "Terreno",
      startProg: 37637,
      beforeRecep: 37637,
      conRecepMun: 0,
    },
    {
      id: "znsgew",
      type: "garanty",
      description: "Av. obras",
      startProg: 0,
      beforeRecep: 51787,
      conRecepMun: 0,
    },
    {
      id: "anvdw",
      type: "garanty",
      description: "Valor Proy. terminado",
      startProg: 0,
      beforeRecep: 0,
      conRecepMun: 135079.98,
    },
    {
      id: "aansww",
      type: "debt",
      description: "boletas gtía. urban.",
      startProg: 0,
      beforeRecep: 0,
      conRecepMun: 0,
    },
    {
      id: "5sefac",
      type: "debt",
      description: "anticipo",
      startProg: 7000,
      beforeRecep: 7726.69,
      conRecepMun: 7726.69,
    },
    {
      id: "7e7wbd",
      type: "debt",
      description: "créditos según av. de obras",
      startProg: 0,
      beforeRecep: 47111.73,
      conRecepMun: 47111.73,
    },
    {
      id: "53sse",
      type: "debt",
      description: "créditos con recep. mun.",
      startProg: 0,
      beforeRecep: 0,
      conRecepMun: 0,
    }
  ];

  // const listGaranties: VarGDModel[] = [];
  const [listGaranties, setListGaranties] = useState<VarGDModel[]>([]);
  const [listTotalDebt, setListTotalDebt] = useState<VarGDModel[]>([]);
  const [perConst, setPerConst] = useState(12);
  const [interest, setInterest] = useState(12);
  const [recPry, setRecPry] = useState(6);

  let totalGarantSP = 0;
  let totalGarantBR = 0;
  let totalGarantRM = 0;
  let totalDebtSP = 0;
  let totalDebtBR = 0;
  let totalDebtRM = 0;
  
  useEffect(() => {
    setListGaranties(tabCons.filter((row) => row.type === "garanty"));
    setListTotalDebt(tabCons.filter((row) => row.type === "debt"));
  }, []);

  return (
    <div className="container">
      <div className="d-flex">
        <div className="col-2">
          <h4>Indices</h4>
          <Form>
            <Form.Group controlId="formPesConst" 
              className="d-flex flex-column align-items-start">
              <Form.Label>Per. Const. (n)</Form.Label>
              <Form.Control readOnly defaultValue={perConst}/>
            </Form.Group>
            <Form.Group controlId="formPesConst"
              className="d-flex flex-column align-items-start">
              <Form.Label>Interes (i)</Form.Label>
              <Form.Control readOnly defaultValue={interest}/>
            </Form.Group>
            <Form.Group controlId="formPesConst"
              className="d-flex flex-column align-items-start">
              <Form.Label>Rec. Pry (Rec)</Form.Label>
              <Form.Control readOnly defaultValue={recPry}/>
            </Form.Group>
          </Form>
        </div>
        <div className="col-10">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Inicio Prog.</th>
                <th scope="col">Antes de Recep. Mun.</th>
                <th scope="col">Con Recep. Mun.</th>
              </tr>
            </thead>
            <tbody>
              {listGaranties.map((rowElement) => {
                totalGarantBR = totalGarantBR + rowElement.beforeRecep;
                totalGarantSP = totalGarantSP + rowElement.startProg;
                totalGarantRM = totalGarantRM + rowElement.conRecepMun;
                return (
                  <tr key={rowElement.id}>
                    <th>{rowElement.description}</th>
                    <th>{rowElement.startProg}</th>
                    <th>{rowElement.beforeRecep}</th>
                    <th>{rowElement.conRecepMun}</th>
                  </tr>
                );
              })}
              <tr className="table-primary">
                <th>total garantías</th>
                <th>{(totalGarantSP).toFixed(2)}</th>
                <th>{(totalGarantBR).toFixed(2)}</th>
                <th>{(totalGarantRM).toFixed(2)}</th>
              </tr>
              {listTotalDebt.map((rowElement) => {
                totalDebtBR = totalDebtBR + rowElement.beforeRecep;
                totalDebtSP = totalDebtSP + rowElement.startProg;
                totalDebtRM = totalDebtRM + rowElement.conRecepMun;
                return (
                  <tr key={rowElement.id}>
                    <th>{rowElement.description}</th>
                    <th>{rowElement.startProg}</th>
                    <th>{rowElement.beforeRecep}</th>
                    <th>{rowElement.conRecepMun}</th>
                  </tr>
                );
              })}
              <tr className="table-primary">
                <th>total deudas</th>
                <th>{(totalDebtSP).toFixed(2)}</th>
                <th>{(totalDebtBR).toFixed(2)}</th>
                <th>{(totalDebtRM).toFixed(2)}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VarGD;
