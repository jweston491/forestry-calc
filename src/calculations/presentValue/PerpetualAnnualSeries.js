import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import { Button, Col, Row, Container } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'

// import * as serviceWorker from './serviceWorker';

export const PerpetualAnnualSeries = () => {
    const [result, calcResult ] = useState(0);
    return (
        <>
        <Formik
            initialValues={{ 
                /**
                 * a = Payment amount 
                 * i = Interest rate
                 */
                a: "",
                i: "",
            }}
            onSubmit={ ( values ) => {
                // Calculations go here
                let { a, i, result } = values
                
                //Convert entered value to an actual percent
                i = i / 100

                result = a / i
                result = calcResult( result )
            }}
            >
                {({ errors, touched, isValidating }) => (
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
