import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import { Button, Col, Row, Container } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'


export const SingleSum = () => {
    const [result, calcResult ] = useState(0);
    return (
        <>
        <Formik
            initialValues={{ 
                /**
                 * vn = Future value at year n
                 * n = Number of years
                 * i = Interest rate
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

                result = ((vn) / Math.pow( (1 + i ), n ) )
                calcResult( result );
            }}
            >
                {({ errors, touched, isValidating, resetForm }) => (
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
