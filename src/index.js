import React from "react";
import ReactDOM from "react-dom";

import * as presentValue from './calculations/presentValue/';
import * as futureValue from './calculations/futureValue/';
import * as annualPayment from './calculations/annualPayment/';
import * as inflationRateConversion from './calculations/inflationRateConversion/';
import * as netPresentValue from './calculations/netPresentValue/';

import 'App.scss'

function App( { settings } ) {
    if ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
        // Debug specific calculations as needed
        return <presentValue.SingleSum/>
    } 
    else {
        switch (settings.formula) {
            // Valid shortcode options
            case 'present-value-single-sum':
                return <presentValue.SingleSum />;
            case 'present-value-terminating-annual-series':
                return <presentValue.TerminatingAnnualSeries />;
            case 'present-value-terminating-periodic-series':
                return <presentValue.TerminatingPeriodicSeries />;
            case 'present-value-perpetual-annual-series':
                return <presentValue.PerpetualAnnualSeries />;
            case 'present-value-perpetual-periodic-series':
                return <presentValue.PerpetualPeriodicSeries />;
            case 'annual-payment-installment-payment':
                return <annualPayment.InstallmentPayment />;
            case 'annual-payment-sinking-fund':
                return <annualPayment.SinkingFund />;
            case 'future-value-single-sum':
                return <futureValue.SingleSum />;
            case 'future-value-terminating-annual-series':
                return <futureValue.TerminatingAnnualSeries />;
            case 'future-value-terminating-periodic-series':
                return <futureValue.TerminatingPeriodicSeries />;
            case 'inflation-rate-conversion-nominal-to-real':
                return <inflationRateConversion.NominalToReal />;
            case 'inflation-rate-conversion-real-to-nominal':
                return <inflationRateConversion.RealToNominal />;
            case 'net-present-value-forest-value':
                return <netPresentValue.ForestValue />;
            case 'net-present-value-net-present-value':
                return <netPresentValue.NetPresentValue />;
            case 'net-present-value-soil-expectation-value':
                return <netPresentValue.SoilExpectationValue />;
        }
    }
}

if ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
    const target = document.getElementById('root');
    if (target) { ReactDOM.render(<App />, target); }
} else {
    const targets = document.querySelectorAll('.fc-root');
    Array.prototype.forEach.call(targets, target => {
        const id = target.dataset.id;
        const settings = window.fcSettings[id];
        ReactDOM.render(<App settings={settings} />, target)
    });
}


// serviceWorker.unregister();
