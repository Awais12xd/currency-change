import './input.css'
import React from 'react';

function InputBox(
   {  labelText,
     amount,
     correct,
     onAmountChange,
     onCurrencyChange,
     currencyOption = [],
     selectCurrency = "usd",
     amountDisabled = false,
     currencyDisabled = false,
     className= ""  }
) {

    return(
        <>
          <div className={`container ${className}`}>
            <div className="label">
                <label >
                   {labelText}
                </label>
                <input
                placeholder='0'
                value={amount}
                 type="number"
                  
                  disabled={amountDisabled}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                  />
            </div>
            <div className="select">
                <label>{correct}</label>
                <select
                value={selectCurrency}
                onChange={(e) => 
              onCurrencyChange(e.target.value)
              
                  
                }
                disabled={currencyDisabled}
                >
            {currencyOption.map((currency) => (
             <option
             key={currency}
              value={currency}
              >
                {currency}
              </option>   
            ))}                   
                </select>
            </div>
          </div>
        </>
    )
}

export default InputBox ;