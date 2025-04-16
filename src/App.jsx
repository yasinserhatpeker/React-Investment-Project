import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {

  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1500,
    expectedReturn:6,
    duration:10,

})
 const inputIsValid = userInput.duration >= 1;


function handleChange(inputIdentifier,newValue) {
  setUserInput(prevUserInput => {
     return {
      ...prevUserInput,
      [inputIdentifier]: +newValue,
     }
  })
}

  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={userInput}/>
    {!inputIsValid &&  <p className="center">Duration must be greater than zero</p>}
    {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
