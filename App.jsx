import { useState } from 'react'
import Currencyinfo from './hooks/currencyinfo'
import InputBox from './components/Inputbox.jsx';
import './app.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convAmount , setConvAmount] = useState(0)
  
  const currencyArray = Currencyinfo(from);
  const options = Object.keys(currencyArray);

  const btn = () => {
    setConvAmount( amount * currencyArray[to] )
  }

   const setFromSelect = (currency) => {
    setFrom(currency)
   }
   const setToSelect = (currency) => {
    setTo(currency)
   }
   const setAmountfunct = (amount) => {
      setAmount(amount)
   }
  const swap = () =>{
    setFrom(to) 
    setTo(from)
    setConvAmount(amount)
    setAmount(convAmount)
  }

  return (
    <>
   
    <div className="containe">
      <div className="box">
      <InputBox 
      labelText='Enter Amount'
      amount={amount}
      currencyOption={options}
      selectCurrency={from}
      onCurrencyChange = {setFromSelect}
      onAmountChange = {setAmountfunct}
      correct='From'
      />
      </div>
      <div className="swap">
        <button onClick={swap}>swap</button>
      </div>
      <div 
      style={{
        marginTop:"20px"
      }}
      className="box">
      <InputBox 
      labelText='Converted Amount'
      amount={convAmount}
      currencyOption={options}
      selectCurrency={to}
      onCurrencyChange = {setToSelect}
      correct='To'
      
      
      />
      </div>
     <div className="convert">
     <button onClick={btn}> convert</button>
     </div>
    </div>
   
  
    </>
  )
}

export default App

