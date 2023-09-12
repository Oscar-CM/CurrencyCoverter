import React from 'react'
import PropTypes from "prop-types"

const CurrencyRows = ( props ) => {
    return (
        <div className='p-3'>
            <form action='' method='POST' className='text-black'>
                <div className='bg-white flex justify-between'>
                    <input type='number'
                        value={props.amount}
                        onChange={e =>props.onAmountChange(e.target.value)}
                        className='outline-none h-7 flex-1 mr-4' />

                    <select
                        className='m-2'
                        value={props.currency}
                        onChange={e =>props.onCurrencyChange(e.target.value)}

                    >
                        {props.currencies.map((currency) => (
                            <option value={currency} key={currency}>{currency}</option>

                        ))}

                    </select>
                </div>
            </form>
        </div>
    );
}

CurrencyRows.propTypes = {
    amount:PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies:PropTypes.array,
    onAmountChange:PropTypes.func,
    onCurrencyChange:PropTypes.func, 

}

export default CurrencyRows