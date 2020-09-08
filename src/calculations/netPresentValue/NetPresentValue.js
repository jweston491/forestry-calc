import React, { useState } from "react";
import { Field, Formik, Form, FieldArray, withFormik } from "formik";
import { ReactstrapInput, ReactstrapRadio } from "reactstrap-formik";

import { Button, Col, Row, Container, Label, FormGroup, Input } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'

// import * as serviceWorker from './serviceWorker';

export const NetPresentValue = () => {
    const [result, calcResult ] = useState(0);

    let initialValues = {
        1 : {
            a : '',
            n : '',
            cr: '',
            r : ''
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
                    r : ''  
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
                i: '5'
            }}
            onSubmit={ ( values ) => {
                
                let { i, calcRows, result } = values

                //Convert entered value to an actual percent
                i = i / 100

                let rowValues = []

                for( let rowNum in calcRows ){
                    
                    let { a, n, cr, r} = calcRows[rowNum]

                    let costMulti = ("revenue" === cr ) ? 1 : -1

                    a = a * costMulti

                    let lineResult;
                    if( typeof rows[rowNum] !== 'undefined'){
                        if ( "annual" === r ) {
                            lineResult = a * ( ( Math.pow( ( 1 + i ), n ) - 1 ) / ( i * ( Math.pow( ( 1 + i ), n ) ) ) )
                        } else {
                            lineResult = ((a) / Math.pow( (1 + i ), n ) )
                        }
                        rowValues.push(lineResult)
                        console.log(rowValues)
                    } else {
                        let diff = rowValues.length - Object.keys(rows).length
                        for(let x=1;x<=diff;x++){
                            rowValues.pop(x)
                        }
                        console.log(rows)
                    }

                }

                result = rowValues.reduce((a, b) => a + b, 0)
                

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
                                            Cash Flow #{ Math.abs(row) }
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
                                            {errors.v0 && touched.v0}
                                        </Col>
                                        <Col>
                                            <Label for={`calcRows.${row}.r`}>
                                                One-Time/Annual:
                                            </Label>
                                            <Field className="form-control" as="select" id={`calcRows.${row}.r`} name={`calcRows.${row}.r`}>
                                                <option value="one-time">One-Time</option>
                                                <option value="annual">Annual</option>
                                            </Field>
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
                            <Button onClick={()=>{resetForm()}}>Reset Form</Button>
                        </Form>
                    </Container>
                    
                )}
        </Formik>
        </>
    );
};


// import * as serviceWorker from './serviceWorker';
