import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
function App (){
  let mn = localStorage.getItem('myName');
  const [ count, setCount ] = useState(mn) //counter value is initiallyu set to zero
 localStorage.setItem('myName','El-Fuhad');

  return (<>
  
  <div>I will show localstorage variables here.<br/>{count}</div>
  <Form/>
  </>
   
   
  )
}


export default App


