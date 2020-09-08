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
                 * v0 = Present value
                 * n = Number of years
                 * i = interest rate
                 */
                v0: "",
                n: "",
                i: "",
            }}
            onSubmit={ ( values ) => {
                // Calculations go here
                let { v0, n, i, result } = values

                //Convert entered value to an actual percent
                i = i / 100

                result = v0 * ( Math.pow( ( 1 + i ), n ) )
                calcResult( result );
            }}
            >
                {({ errors, touched, resetForm, isValidating }) => (
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Field
                                        label="Present Value ($): " 
                                        name="v0"
                                        id="v0"
                                        type="number"
                                        component={ReactstrapInput}
                                        validate={validateCurrency}
                                    />
                                    {errors.v0 && touched.v0}
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
