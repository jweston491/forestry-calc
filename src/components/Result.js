import React from "react";
import { ReturnResult } from '../helpers/ReturnResult.js';

export const Result = ( { result, format } ) => {
    return(
        <>
            Result: { result ? ReturnResult( result, format ) : '0' }
        </>
    )
}