import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import { Button, Col, Row, Container } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'


export const RealToNominal = () => {
    const [result, calcResult ] = useState(0);
    return (
        <>
        <Formik
            initialValues={{ 
                /**
                 * ireal = Real interest rate
                 * f = inflation rate
                 */
                ireal: "",
                f: "",
            }}
            onSubmit={ ( values ) => {
                // Calculations go here
                let { ireal, f, result } = values

                //Convert entered value to an actual percent
                ireal = ireal / 100
                f = f / 100

                result = ( ( 1 + ireal ) / ( 1 + f ) ) - 1

                result = ((ireal + 1) * (1 + f)) - 1
                calcResult( result );
            }}
            >
                {() => (
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Field 
                                        label="Real interest rate:"
                                        type="number"
                                        name="ireal" 
                                        id="ireal"
                                        component={ReactstrapInput}
                                    />
                                    <em>Ex. 5% = 5</em>
                                    <br/><br/>
                                    <Field 
                                        label="Inflation rate:"
                                        type="number"
                                        name="f" 
                                        id="f"
                                        component={ReactstrapInput}
                                    />
                                    <em>Ex. 5% = 5</em>
                                    <br/><br/>
                                    <Button type="submit">Calculate</Button>
                                    <br/><br/>
                                    <Result 
                                        result={ result }
                                        format={ 'percent' } 
                                    />
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
