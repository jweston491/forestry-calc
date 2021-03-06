import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import { Button, Col, Row, Container } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'

// import * as serviceWorker from './serviceWorker';

export const TerminatingPeriodicSeries = () => {
    const [result, calcResult ] = useState(0);
    return (
        <>
        <Formik
            initialValues={{ 
                /**
                 * a = Payment amount 
                 * n = Number of years
                 * i = Interest rate
                 * p = Payment period
                 */
                a: "",
                n: "",
                i: "",
                p: ""
            }}
            onSubmit={ ( values ) => {
                // Calculations go here
                let { a, n, i, p, result } = values
                
                //Convert entered value to an actual percent
                i = i / 100

                result = a * ( ( Math.pow( ( 1 + i ), n ) - 1 ) / ( ( Math.pow( ( 1 + i ), p ) - 1 ) ) )

                
                
                calcResult( result );
            }}
            >
                {({ errors, touched, resetForm, isValidating }) => (
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Field
                                        label="Payment Amount ($): " 
                                        name="a"
                                        id="a"
                                        type="number"
                                        component={ReactstrapInput}
                                        validate={validateCurrency}
                                    />
                                    {errors.a && touched.a}
                                    <Field 
                                        label="Payment period (Years)"
                                        type="number"
                                        name="p" 
                                        id="p"
                                        component={ReactstrapInput}
                                    />
                                    <Field 
                                        label="Number of Years:"
                                        type="number"
                                        name="n" 
                                        id="n"
                                        component={ReactstrapInput}
                                    />
                                    <Field 
                                        label="Interest Rate (%):"
                                        type="number"
                                        name="i" 
                                        id="i"
                                        component={ReactstrapInput}
                                    />
                                    <em>Ex. 5% = 5</em>
                                    <br/><br/>
                                    <Button type="submit">Calculate</Button>
                                    <br/><br/>
                                    <Result result={ result } />
                                    <br/><br/>
                                    <Button onClick={()=>{resetForm(); calcResult(0)}}>Reset Form</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    
                )}
        </Formik>
        </>
    );
};

// import * as serviceWorker from './serviceWorker';
