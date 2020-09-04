export const addRow = () => {
    let numRows = ''
    if (typeof rows !== 'undefined'){
        numRows = Object.keys(rows).length
    } else {
        numRows = 0
    }
    
    let nextRow = numRows + 1
    setRows(
        {
            ...rows, 
            [nextRow]: {
                a : '',
                n : '',
                cr: '',
                r : ''  
            }
        }
    )
}