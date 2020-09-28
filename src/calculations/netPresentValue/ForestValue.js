import React, { useState } from "react";
import { Field, Formik, Form, FieldArray, withFormik } from "formik";
import { ReactstrapInput, ReactstrapRadio } from "reactstrap-formik";

import { Button, Col, Row, Container, Label, FormGroup, Input } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'

// import * as serviceWorker from './serviceWorker';

export const ForestValue = () => {
    const [result, calcResult ] = useState(0);

    let initialValues = {
        1 : {
            a : '',
            n : '',
            cr: '',
        }
    }

    const [rows, setRows ] = useState({
        ...initialValues
    });

    const addRow = () => {
        let numRows = ''
        if (typeof rows !== 'undefined'){
            numRows = Object.keys(rows).length
        } else {
            numRows = 0
        }
        
        let nextRow = numRows + 1
        setRows(
            {
                ...rows, 
                [nextRow]: {
                    a : '',
                    n : '',
                    cr: '',
                }
            }
        )
    }

    const removeRow = () => {
        let numRows = ''
        if (typeof rows !== 'undefined'){
            numRows = Object.keys(rows).length
            let tempRows = rows
            delete tempRows[numRows]
            setRows({...tempRows})
        } else {
            numRows = 0
        }
    }

    return (
        <>
        <Formik
            initialValues={{
                calcRows: {
                    ...rows
                },
                sev : '',
                i : '5',
                y0: '0',
                f : '',
                o : '0',
                yf: '',
                o_cr: ''
            }}
            onSubmit={ ( values ) => {
                
                let { i, calcRows, sev, f, yf, o, o_cr, result } = values

                //Convert entered value to an actual percent
                i = i / 100

                let rowValues = []

                for( let rowNum in calcRows ){
                    
                    let { a, n, cr } = calcRows[rowNum]

                    let costMulti = ("revenue" === cr ) ? 1 : -1

                    a = a * costMulti

                    let lineResult;
                    if( typeof rows[rowNum] !== 'undefined'){

                        lineResult = a / ( Math.pow( ( 1 + i ), n ) )
 
                        rowValues.push(lineResult)

                    } else {
                        let diff = rowValues.length - Object.keys(rows).length
                        for(let x=1;x<=diff;x++){
                            rowValues.pop(x)
                        }
                    }

                }

                let sum = rowValues.reduce((a, b) => a + b, 0)
                console.log(rowValues)
                console.log(sum)

                console.log(sev)

                let costMulti = ("revenue" === o_cr ) ? 1 : -1

                o = o * costMulti

                console.log(o)

                console.log(i, calcRows, sev, f, yf, o, o_cr, sum )

                result = sum + ( f / Math.pow( ( 1 + i ), yf ) ) + ( o * ( ( Math.pow( ( 1 + i ), yf ) - 1 ) / ( i * Math.pow( ( 1 + i ), yf ) ) ) ) + ( sev / Math.pow( ( 1 + i ), yf ) )

                calcResult(result);
            }}
            >
                {({ errors, touched, resetForm, isValidating }) => (
                    <Container>
                        <Form>
                            {  
        
                                Object.keys(rows).map((row, values) => (
                                    
                                    <Row className="d-flex align-items-end mb-4">
                                        <Col className="align-self-center">
                                            Mid-Rotation #{ Math.abs(row) }
                                        </Col>
                                        <Col>
                                            <Label for={`calcRows.${row}.cr`}>
                                                Cost/Revenue:
                                            </Label>

                                            <Field id={`calcRows.${row}.cr`} className="form-control" as="select" name={`calcRows.${row}.cr`}>
                                                <option value="cost">Cost</option>
                                                <option value="revenue">Revenue</option>
                                            </Field>
                                        </Col>
                                        <Col>
                                            <Field
                                                label="Amount ($):"
                                                type="number"
                                                id={`calcRows.${row}.a`}
                                                name={`calcRows.${row}.a`}
                                                component={ReactstrapInput}
                                                validate={validateCurrency}
                                                className="mb-0"
                                                required
                                            />
                                            {/* {errors.calcRows`.${row}`.a && touched.calcRows`.${row}`.a} */}
                                        </Col>
                                        <Col>
                                            <Field
                                                label="Year:"
                                                type="number"
                                                id={`calcRows.${row}.n`}
                                                name={`calcRows.${row}.n`}
                                                required
                                                component={ReactstrapInput}
                                            />
                                        </Col>
                                    </Row>
                                ))
                                
                            }
                            <Row className="d-flex align-items-end mb-4">
                                <Col className="align-self-center col-md-3">
                                    Final Harvest:
                                </Col>
                                <Col className="col-md-3 offset-md-3">
                                    <Field
                                        label="Amount ($):"
                                        type="number"
                                        id='f'
                                        name='f'
                                        component={ReactstrapInput}
                                        validate={validateCurrency}
                                    />
                                    {errors.f && touched.f}
                                </Col>
                                <Col>
                                    <Field
                                        label="Year:"
                                        type="number"
                                        id='yf'
                                        name='yf'
                                        required
                                        component={ReactstrapInput}
                                    />
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-end mb-4">
                                <Col className="align-self-center col-md-3">
                                    Net Annual Cash Flow
                                </Col>
                                <Col className="col-md-3">
                                    <Label for='o_cr'>
                                        Cost/Revenue:
                                    </Label>

                                    <Field id='o_cr' className="form-control" as="select" name='o_cr'>
                                        <option value="cost">Cost</option>
                                        <option value="revenue">Revenue</option>
                                    </Field>
                                </Col>
                                <Col className="col-md-3">
                                    <Field
                                        label="Amount ($):"
                                        type="number"
                                        id='o'
                                        name='o'
                                        component={ReactstrapInput}
                                        validate={validateCurrency}
                                    />
                                    {errors.o && touched.o}
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-end mb-4">
                                <Col className="align-self-center col-6">
                                    Land Value:
                                </Col>
                                <Col className="col-md-3">
                                    <Field
                                        label="Amount ($):"
                                        type="number"
                                        id='sev'
                                        name='sev'
                                        component={ReactstrapInput}
                                        validate={validateCurrency}
                                    />
                                    {errors.sev && touched.sev}
                                </Col>
    
                            </Row>
                            <Row>
                                <Col className="col-md-3 col-12">
                                    <Field
                                        label="Interest Rate (%):"
                                        type="number"
                                        id='i'
                                        name='i'
                                        required
                                        component={ReactstrapInput}
                                    />
                                    <em>Ex. 5% = 5</em>
                                </Col>
                            </Row>
                            <br/><br/>
                            <Button
                             onClick={()=>{addRow()}}>Add Cash Flow</Button>
                             &nbsp;
                             <Button
                             onClick={()=>{removeRow()}}>Remove Cash Flow</Button>
                             <br/><br/>
                             <Button type="submit">Calculate</Button>
                             <br/><br/>
                             <Result result={ result } />
                             <br/><br/>
                            <Button onClick={()=>{resetForm(); calcResult(0)}}>Reset Form</Button>
                        </Form>
                    </Container>
                    
                )}
        </Formik>
        </>
    );
};


// import * as serviceWorker from './serviceWorker';
