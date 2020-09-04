export const validateCurrency = (value) => {
    let error;
   if (!/^[0-9]+(\.[0-9]{1,2})?$/i.test(value)) {
     error = 'Invalid currency format';
   }
   return error;
}