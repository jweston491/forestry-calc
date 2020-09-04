import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import { Button, Col, Row, Container } from "reactstrap";
import { validateCurrency } from 'helpers/validateCurrency'
import { Result } from 'components/Result'


export const NominalToReal = () => {
    const [result, calcResult ] = useState(0);
    return (
        <>
        <Formik
            initialValues={{ 
                /**
                 * inom = nominal interest rate
                 * f = inflation rate
                 */
                inom: "",
                f: "",
            }}
            onSubmit={ ( values ) => {
                // Calculations go here
                let { inom, f, result } = values

                //Convert entered value to an actual percent
                inom = inom / 100
                f = f / 100

                result = ( ( 1 + inom ) / ( 1 + f ) ) - 1
                calcResult( result );
            }}
            >
                {() => (
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Field 
                                        label="Nominal interest rate:"
                                        type="number"
                                        name="inom" 
                                        id="inom"
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
