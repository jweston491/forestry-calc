import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import { Button, Col, Row, Container } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'


export const SinkingFund = () => {
    const [result, calcResult ] = useState(0);
    return (
        <>
        <Formik
            initialValues={{ 
                /**
                 * vn = Future value
                 * n = Number of years
                 * i = interest rate
                 */
                vn: "",
                n: "",
                i: "",
            }}
            onSubmit={ ( values ) => {
                // Calculations go here
                let { vn, n, i, result } = values

                //Convert entered value to an actual percent
                i = i / 100

                result = vn * ( i / ( Math.pow( ( 1 + i ), n ) - 1 ) )
                calcResult( result );
            }}
            >
                {({ errors, touched, resetForm, isValidating }) => (
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Field
                                        label="Future Value ($): " 
                                        name="vn"
                                        id="vn"
                                        type="number"
                                        component={ReactstrapInput}
                                        validate={validateCurrency}
                                    />
                                    {errors.vn && touched.vn}
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
                                    <Button onClick={()=>{resetForm()}}>Reset Form</Button>
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
