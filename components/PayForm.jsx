import React from 'react'
import styled from 'styled-components'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';

function PayForm() {
    const Pay = styled.div`
    border-radius: 24px;
    background-color: #6d32cc;
    min-height: 80vh;
    color: #fff;
    .field {
        margin-bottom: 20px;
    }
    .number-style input, .p-calendar input {
        background: #916acfdf;
        color: #fff;
        border: none;
    }
    .p-inputnumber-input {
        width: 100%;
    }
    `
    return (
        <Pay className="p-col-12">
            <h4 className="p-col-10 p-offset-1 p-mb-1">Detalle de Pago</h4>
            <form className="p-col-10 p-offset-1">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="in" style={{color:'#fff', fontSize:'14px'}}>Nombre en tarjeta</label>
                        <InputText className="p-col-12" id="in" style={{background:'#916acfdf', border: 'none', color:'#fff'}} />
                    </div>
                    <div className="field">
                        <label htmlFor="in" style={{color:'#fff', fontSize:'14px'}}>Numero de tarjeta</label>
                        <InputNumber mode="decimal" useGrouping={false} className="p-col-12 number-style p-px-0 p-py-0" id="in" />
                    </div>
                    <div className="p-d-flex ">
                        <div className="field p-d-flex p-flex-column p-col-6 p-py-0">
                            <label htmlFor="in" style={{color:'#fff', fontSize:'14px'}}>Vence</label>
                            <Calendar className="p-col-12 p-px-0 p-py-0" ></Calendar>
                        </div>
                        <div className="field p-d-flex p-flex-column p-col-5 p-offset-1 p-py-0">
                            <label htmlFor="in" style={{color:'#fff', fontSize:'14px'}}>CVV</label>
                            <InputNumber mode="decimal" useGrouping={false} className="number-style p-px-0 p-py-0" id="in" />
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="p-col-12 p-d-flex p-jc-between">
                        <span>Subtotal</span>
                        <span>$450</span>
                    </div>
                    <div className="p-col-12 p-d-flex p-jc-between">
                        <span>Envio</span>
                        <span>$50</span>
                    </div>
                    <div className="p-col-12 p-d-flex p-jc-between">
                        <span>Total</span>
                        <span>$500</span>
                    </div>
                </div>

                <button className="btn p-col-12 p-py-3 btn-cta p-mt-3" type="submit">
                    $500.00 Pagar
                </button>
                

            </form>
        </Pay>
    )
}

export default PayForm
