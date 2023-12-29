import React from 'react'

function useConvertDateToString(date) {
    const inputDate = new Date(date);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    return formattedDate;
}

export default useConvertDateToString