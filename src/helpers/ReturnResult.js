export function ReturnResult( amount, format ) {
  switch(format){
    case 'percent':
      amount = amount * 100;
      amount = amount.toFixed(2).toString() + '%'
      return amount
      break;
    default:
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
      amount = formatter.format( amount )
      return amount;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  amount = formatter.format( amount )
  return amount;
}